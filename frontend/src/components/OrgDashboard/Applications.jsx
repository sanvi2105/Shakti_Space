import { useEffect, useState } from "react";
import ApplicantCard from "./ApplicantCard";

const API = "http://localhost:8002/api/applications";

export default function Applications({ applications, setApplications }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(API, {
          credentials: "include",
        });

        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error("Error fetching applications:", err);
      }
    };

    fetchApplications();
  }, [setApplications]);

  // 🎯 Filtering logic
  const filteredApplications = (applications || []).filter((app) => {
    const matchesFilter =
      filter === "all" ? true : app.status === filter;

    const matchesSearch = (app.name || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      
      
      <h2 className="text-2xl font-bold mb-6 text-teal-800">
        Applications
      </h2>

      
      <div className="flex gap-4 mb-6 flex-wrap">
        
        <select
          className="border border-teal-300 focus:ring-2 focus:ring-teal-400 outline-none p-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>

        <input
          type="text"
          placeholder="🔍 Search by name..."
          className="border border-teal-300 focus:ring-2 focus:ring-teal-600 outline-none p-2 rounded-lg w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      {filteredApplications.length > 0 ? (
        <div className="space-y-4">
          {filteredApplications.map((app) => (
            <ApplicantCard
              key={app._id}
              applicant={app}
              setApplications={setApplications}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-10">
          No applications found 🚫
        </p>
      )}
    </div>
  );
}