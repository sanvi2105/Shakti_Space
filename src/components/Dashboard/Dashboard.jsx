import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* Fetch from backend */
  useEffect(() => {
    const token = localStorage.getItem("token");

    //  Protect route
    if (!token) {
      setError("Please login/register first");
      setLoading(false);
      return;
    }

    fetchApplications(token);
  }, []);

  const fetchApplications = async (token) => {
    try {
      const res = await fetch("http://localhost:8001/api/applications/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to fetch applications");
        setApplications([]);
      } else {
        setApplications(data);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /*  CALCULATIONS */
  const total = applications.length;

  const approved = applications.filter(
    (app) => app.status === "Approved"
  ).length;

  const pending = applications.filter(
    (app) => !app.status || app.status === "Applied"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      {/*  Loading */}
      {loading && <p>Loading applications...</p>}

      {/*  Error */}
      {!loading && error && (
        <p className="text-red-500">{error}</p>
      )}

      {/*  MAIN CONTENT */}
      {!loading && !error && (
        <>
          {/*  STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

            <div className="p-6 bg-blue-100 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold">{total}</h2>
              <p className="text-gray-600">Total Applied</p>
            </div>

            <div className="p-6 bg-green-100 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold">{approved}</h2>
              <p className="text-gray-600">Approved</p>
            </div>

            <div className="p-6 bg-yellow-100 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold">{pending}</h2>
              <p className="text-gray-600">Pending</p>
            </div>

            <div className="p-6 bg-red-100 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold">{rejected}</h2>
              <p className="text-gray-600">Rejected</p>
            </div>

          </div>

          {/*  No Data */}
          {applications.length === 0 ? (
            <p>No applications found</p>
          ) : (
            /*  APPLICATION LIST */
            <div className="grid gap-6">
              {applications.map((app) => (
                <div key={app._id} className="p-6 bg-white shadow rounded-xl">

                  <h2 className="text-xl font-bold mb-2">
                    {app.jobTitle}
                  </h2>

                  <p><b>Name:</b> {app.name}</p>
                  <p><b>Phone:</b> {app.phone}</p>
                  <p><b>Email:</b> {app.email}</p>
                  <p><b>Skills:</b> {app.skills}</p>
                  <p><b>Experience:</b> {app.experience}</p>

                  {/*  STATUS */}
                  <span
                    className={`font-semibold ${
                      app.status === "Approved"
                        ? "text-green-600"
                        : app.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    Status: {app.status || "Applied"}
                  </span>

                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;