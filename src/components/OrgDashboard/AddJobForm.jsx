import { useState } from "react";

export default function AddJobForm({ setJobs }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    region: "",
    hours: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      ...form,
      id: Date.now(), // unique id
    };

    setJobs((prev) => [...prev, newJob]);

    setForm({
      title: "",
      description: "",
      region: "",
      hours: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow mb-4">
      <input
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Description"
        className="border p-2 w-full mb-2"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="bg-blue-500 text-white px-4 py-2">
        Add Job
      </button>
    </form>
  );
}