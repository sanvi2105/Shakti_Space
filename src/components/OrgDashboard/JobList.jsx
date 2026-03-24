import AddJobForm from "./AddJobForm";

export default function JobList({ jobs, setJobs }) {
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Jobs</h2>

      <AddJobForm setJobs={setJobs} />

      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 shadow rounded mb-3">
          <h3 className="font-bold">{job.title}</h3>
          <p>{job.description}</p>

          <button
            onClick={() => deleteJob(job.id)}
            className="text-red-500 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}