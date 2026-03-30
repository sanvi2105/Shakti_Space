const API = "/api/applications";

export default function ApplicantCard({ applicant, setApplications }) {
  
  const updateStatus = async (status) => {
    try {
      const res = await fetch(`${API}/${applicant._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ status }),
      });

      const updated = await res.json();

      
      setApplications((prev) =>
        prev.map((app) =>
          app._id === updated._id ? updated : app
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:border-teal-300">
      
     
      <div className="flex justify-between items-start">
        
      
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold">
            {applicant.name?.charAt(0)}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {applicant.name}
            </h3>
            <p className="text-xs text-gray-400">Applicant</p>
          </div>
        </div>

       
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
            applicant.status === "accepted"
              ? "bg-green-100 text-green-700"
              : applicant.status === "rejected"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {applicant.status}
        </span>
      </div>

     
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-400 text-xs">Role</p>
          <p className="font-medium text-gray-700">
            {applicant.jobTitle || "N/A"}
          </p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-400 text-xs">Skills</p>
          <p className="font-medium text-gray-700">
            {applicant.skills || "N/A"}
          </p>
        </div>

      </div>

    
      <div className="border-t my-4"></div>

   
      <div className="flex gap-3">
        
        <button
          onClick={() => updateStatus("accepted")}
          className="flex-1 bg-teal-800 text-white py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition active:scale-95 shadow-sm"
        >
          ✔ Accept
        </button>

        <button
          onClick={() => updateStatus("rejected")}
          className="flex-1 bg-red-500 text-white py-2 rounded-full text-sm font-medium hover:bg-red-600 transition active:scale-95 shadow-sm"
        >
          ✖ Reject
        </button>
      </div>
    </div>
  );
}