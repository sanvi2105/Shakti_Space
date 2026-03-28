import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics({ applications, jobs }) {
  const accepted = applications.filter(a => a.status === "accepted").length;
  const rejected = applications.filter(a => a.status === "rejected").length;
  const pending = applications.filter(a => a.status === "pending").length;

  // Pie Data
  const pieData = [
    { name: "Accepted", value: accepted },
    { name: "Rejected", value: rejected },
    { name: "Pending", value: pending },
  ];

  // Bar Data
  const barData = [
    {
      name: "Platform Stats",
      Jobs: jobs.length,
      Applications: applications.length,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Analytics</h2>

      {/*  Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">{jobs.length}</h3>
          <p>Jobs Posted</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">{applications.length}</h3>
          <p>Total Applications</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">{accepted}</h3>
          <p>Women Helped</p>
        </div>
      </div>

      {/*  Charts */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* PIE CHART */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="mb-4 font-semibold">Application Status</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                <Cell fill="#22c55e" /> {/* green */}
                <Cell fill="#ef4444" /> {/* red */}
                <Cell fill="#facc15" /> {/* yellow */}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="mb-4 font-semibold">Jobs vs Applications</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Jobs" fill="#3b82f6" />
              <Bar dataKey="Applications" fill="#9333ea" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}