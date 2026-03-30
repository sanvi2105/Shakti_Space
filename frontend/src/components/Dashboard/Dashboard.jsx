import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

import { BarChart, Bar } from "recharts";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchApplications(token);
  }, []);

  const fetchApplications = async (token) => {
    try {
      const res = await fetch("/api/applications/my", {
        headers: {
           Authorization: `Bearer ${token}`,
             },
           credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.log("API Error:", res.status, errorData);
        setApplications([]);
          return;
      }

      const data = await res.json();
    //   setApplications(data);
    // } catch (err) {
    //   console.log(err);

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

  /*  STATS */
  const total = applications.length;
  const approved = applications.filter(a => a.status === "Approved").length;
  const rejected = applications.filter(a => a.status === "Rejected").length;
  const pending = applications.filter(a => !a.status || a.status === "Applied").length;

  /*  LINE CHART DATA */
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

  return Object.keys(monthsMap).map((m) => ({
    month: m,
    count: monthsMap[m],
  }));
};

  /*  PIE CHART DATA */
  const jobData = () => {
    const jobs = {};
    applications.forEach((app) => {
      jobs[app.jobTitle] = (jobs[app.jobTitle] || 0) + 1;
    });

    return Object.keys(jobs).map((job) => ({
      name: job,
      value: jobs[job],
    }));
  };

  const COLORS = ["#ec4899", "#22c55e", "#facc15", "#ef4444", "#3b82f6"];

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/*  SIDEBAR */}
      <div className="w-64 bg-white border-r p-6 shadow-sm">
        <h2 className="text-2xl font-bold !text-secondary mb-10">
          ShaktiSpace
        </h2>

        <ul className="space-y-4">
          <li
            onClick={() => setActivePage("dashboard")}
            className={`cursor-pointer px-4 py-2 rounded-lg ${
              activePage === "dashboard"
                ? "!bg-secondary text-white"
                : "!text-gray-600"
            }`}
          >
            Dashboard
          </li>

          <li
            onClick={() => setActivePage("applications")}
            className={`cursor-pointer px-4 py-2 rounded-lg ${
              activePage === "applications"
                ? "!bg-secondary text-white"
                : "!text-gray-600"
            }`}
          >
            Applications
          </li>
        </ul>
      </div>

      {/*  MAIN */}
      <div className="flex-1 p-8">

        {activePage === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-8">
              Dashboard Overview
            </h1>

            {/*  STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

              <div className="bg-blue-100 p-6 rounded-2xl shadow">
                <p className="text-gray-500">Total Applied</p>
                <h2 className="text-3xl font-bold mt-2">{total}</h2>
              </div>

              <div className="bg-green-100 p-6 rounded-2xl shadow">
                <p className="text-gray-500">Approved</p>
                <h2 className="text-3xl font-bold text-green-600 mt-2">{approved}</h2>
              </div>

              <div className="bg-yellow-100 p-6 rounded-2xl shadow">
                <p className="text-gray-500">Pending</p>
                <h2 className="text-3xl font-bold text-yellow-500 mt-2">{pending}</h2>
              </div>

              <div className="bg-red-100 p-6 rounded-2xl shadow">
                <p className="text-gray-500">Rejected</p>
                <h2 className="text-3xl font-bold text-red-500 mt-2">{rejected}</h2>
              </div>

            </div>

            {/*  CHARTS IN ONE ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/*  BAR CHART */}
                <div className="bg-white p-6 rounded-2xl shadow">
                   <h2 className="text-lg font-semibold mb-4">
                     Applications per Month
                   </h2>

                   <ResponsiveContainer width="100%" height={300}>
                       <BarChart data={monthlyData()}>
                      <XAxis dataKey="month" />
                       <YAxis />
                        <Tooltip />
                          <Bar dataKey="count" fill="#ec4899" radius={[8, 8, 0, 0]} />
                        </BarChart>
                       </ResponsiveContainer>
                 </div>

              {/*  PIE CHART */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">
                  Job Categories Applied
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={jobData()}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={100}
                      label
                    >
                      {jobData().map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

            </div>
          </>
        )}

        {/*  APPLICATIONS PAGE */}
        {activePage === "applications" && (
          <>
            <h1 className="text-3xl font-bold mb-6">
              My Applications
            </h1>

            <div className="space-y-6">
              {applications.map((app) => (
                <div key={app._id} className="bg-white p-6 rounded-xl shadow">
                  <h2 className="text-xl font-bold">{app.jobTitle}</h2>

                  <p><b>Name:</b> {app.name}</p>
                  <p><b>Email:</b> {app.email}</p>
                  <p><b>Skills:</b> {app.skills}</p>

                  <span className="text-green-600 font-semibold">
                    {app.status || "Applied"}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;