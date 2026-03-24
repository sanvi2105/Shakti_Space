import { useState } from "react";
import Sidebar from "./Sidebar";
import JobList from "./JobList";
import Applications from "./Applications";
import Analytics from "./Analytics";

export default function OrgDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Riya",
      skills: "Data Entry",
      region: "Delhi",
      jobId: null,
      status: "pending",
    },
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case "jobs":
        return <JobList jobs={jobs} setJobs={setJobs} />;

      case "applications":
        return (
          <Applications
            applications={applications}
            setApplications={setApplications}
            jobs={jobs}
          />
        );

      case "analytics":
        return <Analytics applications={applications} jobs={jobs} />;

      default:
        return (
          <div>
          
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Welcome back 👋
            </h1>

          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

             
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-sm opacity-80">Total Jobs</p>
                <h2 className="text-3xl font-bold mt-2">{jobs.length}</h2>
              </div>

             
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-teal-100">
                <p className="text-gray-500 text-sm">Applications</p>
                <h2 className="text-3xl font-bold text-teal-600 mt-2">
                  {applications.length}
                </h2>
              </div>

          
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-teal-100">
                <p className="text-gray-500 text-sm">Accepted</p>
                <h2 className="text-3xl font-bold text-green-600 mt-2">
                  {
                    applications.filter(
                      (a) => a.status === "accepted"
                    ).length
                  }
                </h2>
              </div>
            </div>

         
            {jobs.length === 0 && (
              <div className="mt-10 bg-white border border-dashed border-teal-200 p-6 rounded-2xl text-center text-gray-500">
                No jobs posted yet 🚀 <br />
                Start by adding your first job!
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      
     
      <Sidebar setActiveTab={setActiveTab} />

      
      <div className="flex-1 p-6 overflow-y-auto">

        
        <div className="flex justify-between items-center mb-6 bg-white p-5 rounded-2xl shadow-sm border border-teal-100">
          
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Organization Dashboard
            </h1>
            <p className="text-sm text-gray-400">
              Manage jobs & applications easily
            </p>
          </div>

          
          <div className="flex items-center gap-3 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
            <div className="w-8 h-8 bg-teal-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
              A
            </div>
            <span className="text-sm font-medium text-teal-800">
              Admin Panel
            </span>
          </div>
        </div>

        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-inner min-h-[80vh] border border-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}