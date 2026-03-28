// src/components/Resources/LearningPage.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 ADDED

const API = "http://localhost:8001"; // your backend

// ─── Data — IDs changed to strings to match backend ──────────────────────────
const modules = [
  {
    id: 'stock-market',          // 👈 CHANGED from 1
    title: 'What is the Stock Market?',
    description: 'Learn the basics of how stock markets work and why they matter.',
    level: 'beginner',
    duration: '5 min',
    xp: 25,
    icon: 'check-circle',
  },
  {
    id: 'pe-ratios',             // 👈 CHANGED from 2
    title: 'Understanding P/E Ratios',
    description: 'Dive into price-to-earnings ratios and what they tell investors.',
    level: 'beginner',
    duration: '8 min',
    xp: 30,
    icon: 'check-circle',
  },
  {
    id: 'candlestick-charts',    // 👈 CHANGED from 3
    title: 'Reading Candlestick Charts',
    description: 'Master the art of technical analysis with candlestick patterns.',
    level: 'intermediate',
    duration: '12 min',
    xp: 50,
    icon: 'play',
  },
  {
    id: 'diversification',       // 👈 CHANGED from 4
    title: 'Diversification Strategies',
    description: 'Learn how to build a resilient portfolio through diversification.',
    level: 'intermediate',
    duration: '10 min',
    xp: 40,
    icon: 'book',
  },
  {
    id: 'options-trading',       // 👈 CHANGED from 5
    title: 'Options Trading Basics',
    description: 'Introduction to calls, puts, and options strategies.',
    level: 'advanced',
    duration: '15 min',
    xp: 75,
    icon: 'play',
  },
  {
    id: 'market-quiz',           // 👈 CHANGED from 6
    title: 'Market Fundamentals Quiz',
    description: 'Test your knowledge of market basics and trading concepts.',
    level: 'beginner',
    duration: '5 min',
    xp: 60,
    icon: 'question',
  },
];

// ─── Level config ─────────────────────────────────────────────────────────────
const levelConfig = {
  beginner:     { color: '#1A9E8F', bg: '#E6F7F5', label: 'beginner' },
  intermediate: { color: '#E91E8C', bg: '#FDE8F4', label: 'intermediate' },
  advanced:     { color: '#2563EB', bg: '#EBF2FF', label: 'advanced' },
};

// ─── Icon helper ──────────────────────────────────────────────────────────────
function ModuleIcon({ type, completed }) {
  const iconBg    = completed ? '#FDE8F4' : '#F3F4F6';
  const iconColor = completed ? '#E91E8C' : '#9CA3AF';

  const iconStyle = {
    width: 44, height: 44, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: iconBg, flexShrink: 0,
  };

  const icons = {
    'check-circle': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    play: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    book: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    question: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  };

  return <div style={iconStyle}>{icons[type]}</div>;
}

// ─── Module Card ──────────────────────────────────────────────────────────────
function ModuleCard({ module, completed }) {   // 👈 completed now comes as a prop
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();              // 👈 ADDED
  const lvl = levelConfig[module.level];

  return (
    // 👇 Changed <a href> to <div onClick={() => navigate(...)>
    <div
      onClick={() => navigate(`/resource/${module.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        border: hovered
          ? '1.5px solid #E91E8C'
          : completed
          ? '1.5px solid #1A9E8F'   // green border when done
          : '1.5px solid #E5E7EB',
        borderRadius: 16,
        padding: '22px 20px 18px',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 32px rgba(233,30,140,0.12)' : '0 2px 8px rgba(0,0,0,0.05)',
        display: 'block',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Completed ribbon ── */}
      {completed && (
        <div style={{
          position: 'absolute', top: 12, right: -22,
          background: '#1A9E8F', color: '#fff',
          fontSize: 10, fontWeight: 700,
          padding: '3px 30px',
          transform: 'rotate(45deg)',
          letterSpacing: '0.05em',
        }}>
          DONE
        </div>
      )}

      {/* Top row: icon + badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ModuleIcon type={module.icon} completed={completed} />
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
          color: lvl.color, background: lvl.bg,
          borderRadius: 20, padding: '3px 11px', textTransform: 'lowercase',
        }}>
          {lvl.label}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ color: '#1A1A2E', fontWeight: 700, fontSize: 16, lineHeight: 1.35, margin: '14px 0 8px' }}>
        {module.title}
      </h3>

      {/* Description */}
      <p style={{ color: '#6B7280', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
        {module.description}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18, paddingTop: 14, borderTop: '1px solid #F3F4F6' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#9CA3AF', fontSize: 12.5 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {module.duration}
        </span>
        {/* 👇 XP colour changes when completed */}
        <span style={{ color: completed ? '#1A9E8F' : '#E91E8C', fontWeight: 700, fontSize: 13.5 }}>
          {completed ? `✓ +${module.xp} XP` : `+${module.xp} XP`}
        </span>
      </div>
    </div>
  );
}

// ─── Skeleton loader (shows while API call is in progress) ────────────────────
function SkeletonCard() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 16, padding: '22px 20px', height: 200 }}>
      {[44, 20, 16, 12].map((h, i) => (
        <div key={i} style={{
          height: h, width: i === 0 ? 44 : ['85%','70%','50%'][i-1],
          background: '#F3F4F6', borderRadius: i === 0 ? '50%' : 8,
          marginBottom: 14, animation: 'pulse 1.5s ease infinite',
        }} />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LearningCenter() {
  const [activeFilter, setActiveFilter]     = useState('All');
  const [completedModules, setCompletedModules] = useState([]); // 👈 from API
  const [xpEarned, setXpEarned]             = useState(0);      // 👈 from API
  const [loading, setLoading]               = useState(true);   // 👈 loading state

  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const totalModules    = modules.length;
  const completedCount  = completedModules.length;
  const progressPercent = Math.round((completedCount / totalModules) * 100);

  // 👇 Fetch real progress from backend when page loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { setLoading(false); return; }

    fetch(`${API}/api/progress`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.completedModules) setCompletedModules(data.completedModules);
        if (data.xpEarned !== undefined) setXpEarned(data.xpEarned);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeFilter === 'All'
    ? modules
    : modules.filter((m) => m.level === activeFilter.toLowerCase());

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FB', color: '#1A1A2E', fontFamily: "'Segoe UI', sans-serif", padding: '44px 0 64px' }}>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      <div className="container">

        {/* ── Header ── */}
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-2">
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: '#1A1A2E', margin: 0, letterSpacing: '-0.02em' }}>
              Learning Center
            </h1>
            {/* 👇 Shows real count from API */}
            <p style={{ color: '#9CA3AF', fontSize: 14, marginTop: 4, fontWeight: 500 }}>
              {loading ? 'Loading...' : `${completedCount}/${totalModules} modules completed`}
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1.5px solid #E5E7EB', borderRadius: 24, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {/* 👇 Shows real XP from API */}
            <span style={{ color: '#E91E8C' }}>{xpEarned} XP</span>
            <span style={{ color: '#9CA3AF', fontWeight: 400 }}>earned</span>
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <div style={{ width: '100%', height: 9, background: '#E5E7EB', borderRadius: 99, overflow: 'hidden', marginTop: 28 }}>
          {/* 👇 Width driven by real API data */}
          <div style={{ height: '100%', width: `${progressPercent}%`, background: 'linear-gradient(90deg, #E91E8C, #2563EB)', borderRadius: 99, transition: 'width 0.5s ease' }} />
        </div>

        {/* ── Filters ── */}
        <div className="d-flex gap-2 flex-wrap mt-4 mb-4">
          {filters.map((f) => {
            const active = activeFilter === f;
            return (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                border: active ? '1.5px solid #E91E8C' : '1.5px solid #E5E7EB',
                background: active ? '#E91E8C' : '#FFFFFF',
                color: active ? '#FFFFFF' : '#6B7280',
                borderRadius: 20, padding: '6px 20px',
                fontWeight: active ? 700 : 500, fontSize: 14,
                cursor: 'pointer', transition: 'all 0.18s ease',
                boxShadow: active ? '0 2px 10px rgba(233,30,140,0.25)' : 'none',
              }}>{f}</button>
            );
          })}
        </div>

        {/* ── Module Grid ── */}
        <div className="row g-3">
          {loading
            // Show skeletons while fetching
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4"><SkeletonCard /></div>
              ))
            // 👇 Pass completed as a prop — checks if this module's ID is in the array from API
            : filtered.map((module) => (
                <div key={module.id} className="col-12 col-md-6 col-lg-4">
                  <ModuleCard
                    module={module}
                    completed={completedModules.includes(module.id)}
                  />
                </div>
              ))
          }
        </div>

        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#9CA3AF', paddingTop: 60, fontSize: 15 }}>
            No modules found for this filter.
          </div>
        )}

      </div>
    </div>
  );
}
