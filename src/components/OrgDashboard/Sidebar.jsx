export default function Sidebar({ setActiveTab }) {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-teal-600 to-teal-500 text-white p-6 shadow-xl flex flex-col">

      {/* Logo / Title */}
      <h2 className="text-2xl font-bold mb-10 tracking-wide">
        Org Panel
      </h2>

      {/* Menu */}
      <ul className="space-y-3">

        <li
          onClick={() => setActiveTab("dashboard")}
          className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/20 transition flex items-center gap-2"
        >
          🏠 Dashboard
        </li>

        <li
          onClick={() => setActiveTab("jobs")}
          className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/20 transition flex items-center gap-2"
        >
          💼 Jobs
        </li>

        <li
          onClick={() => setActiveTab("applications")}
          className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/20 transition flex items-center gap-2"
        >
          📄 Applications
        </li>

        <li
          onClick={() => setActiveTab("analytics")}
          className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/20 transition flex items-center gap-2"
        >
          📊 Analytics
        </li>
      </ul>

      {/* Bottom Section (Nice Touch) */}
      <div className="mt-auto pt-10 text-sm text-white/80">
        <p>🌱 Empowering Women</p>
        <p className="text-xs mt-1"></p>
      </div>
    </div>
  );
}