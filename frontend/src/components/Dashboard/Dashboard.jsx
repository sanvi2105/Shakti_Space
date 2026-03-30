import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { BarChart, Bar } from "recharts";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");
  const [refreshFlag, setRefreshFlag] = useState(false); // NEW

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchApplications(token);
  }, [refreshFlag]); // <-- refetch whenever refreshFlag changes

  const fetchApplications = async (token) => {
    try {
      const res = await fetch("/api/applications/my", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.log("API Error:", res.status, errorData);
        setApplications([]);
        return;
      }

      const data = await res.json();
      if (Array.isArray(data)) {
        setApplications(data);
      } else if (data.applications) {
        setApplications(data.applications);
      } else {
        console.log("Unexpected response:", data);
        setApplications([]);
      }
    } catch (err) {
      console.log(err);
      setApplications([]);
    }
  };

  /* STATS */
  const total = applications.length;
  const approved = applications.filter(a => a.status === "accepted").length;
  const rejected = applications.filter(a => a.status === "rejected").length;
  const pending = applications.filter(a => a.status === "pending").length;

  /* LINE CHART DATA */
  const monthlyData = () => {
    const monthsMap = {
      Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
      Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
    };

    applications.forEach((app) => {
      const date = new Date(app.createdAt);
      const month = date.toLocaleString("default", { month: "short" });
      monthsMap[month] += 1;
    });

    return Object.keys(monthsMap).map((m) => ({ month: m, count: monthsMap[m] }));
  };

  /* PIE CHART DATA */
  const jobData = () => {
    const jobs = {};
    applications.forEach((app) => {
      jobs[app.jobTitle] = (jobs[app.jobTitle] || 0) + 1;
    });
    return Object.keys(jobs).map((job) => ({ name: job, value: jobs[job] }));
  };

  const COLORS = ["#ec4899", "#22c55e", "#facc15", "#ef4444", "#3b82f6"];

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r p-6 shadow-sm">
        <h2 className="text-2xl font-bold !text-secondary mb-10">ShaktiSpace</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setActivePage("dashboard")}
            className={`cursor-pointer px-4 py-2 rounded-lg ${activePage === "dashboard" ? "!bg-secondary text-white" : "!text-gray-600"}`}
          >
            Dashboard
          </li>
          <li
            onClick={() => setActivePage("applications")}
            className={`cursor-pointer px-4 py-2 rounded-lg ${activePage === "applications" ? "!bg-secondary text-white" : "!text-gray-600"}`}
          >
            Applications
          </li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8">
        {activePage === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold">Total Applications</h3>
                <p className="text-2xl">{total}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold">Approved</h3>
                <p className="text-2xl">{approved}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold">Rejected</h3>
                <p className="text-2xl">{rejected}</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold mb-4">Monthly Applications</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={monthlyData()}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#ec4899" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold mb-4">Applications by Job</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={jobData()}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {jobData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {activePage === "applications" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-4">My Applications</h1>
            {applications.map((app) => (
              <div key={app._id} className="border-b py-3">
                <p><strong>Job:</strong> {app.jobTitle}</p>
                <p><strong>Status:</strong> {app.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;