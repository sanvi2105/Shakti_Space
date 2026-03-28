// src/components/Resources/ResourcePage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = "http://localhost:8001";

// ─── All module content ───────────────────────────────────────────────────────
const moduleData = {
  "stock-market": {
    title: "What is the Stock Market?",
    level: "beginner",
    duration: "5 min",
    xp: 25,
    sections: [
      {
        heading: "What is the Stock Market?",
        body: "The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. Think of it as a giant auction house — companies list their shares, and investors bid on them based on perceived value.",
      },
      {
        heading: "Why Does It Exist?",
        body: "Companies need money to grow. Instead of borrowing from a bank, they sell ownership slices (shares) to thousands of investors by going public on a stock exchange like the NSE or BSE.",
      },
      {
        heading: "Key Terms to Know",
        bullets: [
          "Bull Market — Prices rising, investors optimistic",
          "Bear Market — Prices falling, investors cautious",
          "Index — A basket of stocks (e.g. Nifty 50, Sensex)",
          "Dividend — Share of company profits paid to shareholders",
        ],
      },
      {
        heading: "Why Should You Care?",
        body: "The stock market has historically returned ~12% annually — far more than a savings account. Understanding it is the first step toward building long-term wealth.",
      },
    ],
  },
  "pe-ratios": {
    title: "Understanding P/E Ratios",
    level: "beginner",
    duration: "8 min",
    xp: 30,
    sections: [
      {
        heading: "What is a P/E Ratio?",
        body: "The Price-to-Earnings ratio is one of the most widely used metrics to evaluate whether a stock is cheap or expensive relative to its earnings.",
      },
      {
        heading: "The Formula",
        highlight: "P/E Ratio = Stock Price ÷ Earnings Per Share (EPS)",
        body: "Example: If a stock trades at ₹500 and the company earned ₹25 per share last year, the P/E ratio is 500 ÷ 25 = 20.",
      },
      {
        heading: "Quick Reference",
        table: {
          headers: ["P/E Range", "What It Means"],
          rows: [
            ["< 10", "Potentially undervalued"],
            ["10 – 20", "Fairly valued (mature company)"],
            ["20 – 40", "Growth stock premium"],
            ["> 40", "High growth expectations"],
          ],
        },
      },
    ],
  },
  "candlestick-charts": {
    title: "Reading Candlestick Charts",
    level: "intermediate",
    duration: "12 min",
    xp: 50,
    sections: [
      {
        heading: "What is a Candlestick?",
        body: "Each candle represents price action over a period (1 min, 1 day, etc). A green candle means price went UP. A red candle means price went DOWN.",
      },
      {
        heading: "4 Key Data Points",
        bullets: ["Open — Price at start", "Close — Price at end", "High — Highest price reached", "Low — Lowest price reached"],
      },
      {
        heading: "Key Patterns",
        bullets: [
          "Doji — Open ≈ Close. Signals market indecision.",
          "Hammer — Long lower wick. Signals bullish reversal.",
          "Engulfing — Large candle engulfs the previous one.",
          "Morning Star — 3-candle bullish reversal pattern.",
        ],
      },
      {
        heading: "Practice Tip",
        body: "Open TradingView (free) and try to identify green and red candles on any stock over the last month before moving on.",
      },
    ],
  },
  "diversification": {
    title: "Diversification Strategies",
    level: "intermediate",
    duration: "10 min",
    xp: 40,
    sections: [
      {
        heading: "What is Diversification?",
        body: "Spreading your investments across different assets, sectors, and geographies to reduce the impact of any single investment going wrong.",
      },
      {
        heading: "Types of Diversification",
        bullets: [
          "Asset Classes — Stocks, Bonds, Gold, Real Estate",
          "Sectors — IT, Healthcare, Banking, FMCG, Energy",
          "Geography — Indian + US markets",
          "Time (SIP) — Invest fixed amount every month",
        ],
      },
      {
        heading: "Model Portfolios",
        table: {
          headers: ["Profile", "Stocks", "Bonds", "Gold"],
          rows: [
            ["Conservative", "30%", "50%", "10%"],
            ["Moderate", "60%", "30%", "5%"],
            ["Aggressive", "85%", "10%", "5%"],
          ],
        },
      },
    ],
  },
  "options-trading": {
    title: "Options Trading Basics",
    level: "advanced",
    duration: "15 min",
    xp: 75,
    sections: [
      {
        heading: "What is an Option?",
        body: "A contract that gives you the right — but not obligation — to buy or sell an asset at a specific price before a certain date.",
      },
      {
        heading: "Two Types",
        bullets: [
          "Call Option — Right to BUY. Buy when you think price goes UP.",
          "Put Option — Right to SELL. Buy when you think price goes DOWN.",
        ],
      },
      {
        heading: "Simple Example",
        highlight: "Reliance at ₹2800. You buy a Call at strike ₹2900, premium ₹50.",
        body: "If Reliance hits ₹3100: Profit = (3100 - 2900) - 50 = ₹150. You risked ₹50 and made ₹150 (3x). If it stays below ₹2900: you only lose your ₹50 premium.",
      },
      {
        heading: "⚠️ Risk Warning",
        body: "Options can expire completely worthless. Always start with paper trading before using real money.",
      },
    ],
  },
  "market-quiz": {
    title: "Market Fundamentals Quiz",
    level: "beginner",
    duration: "5 min",
    xp: 60,
    isQuiz: true,
  },
};

const quizData = [
  { q: "What does P/E ratio stand for?", options: ["Price-to-Equity", "Price-to-Earnings", "Profit-to-Expense", "Percent Earnings"], answer: 1 },
  { q: 'A "Bull Market" means:', options: ["Prices are falling", "Market is closed", "Prices are rising", "High volatility"], answer: 2 },
  { q: 'What is a "Dividend"?', options: ["A type of bond", "Profits paid to shareholders", "A trading fee", "A stock split"], answer: 1 },
  { q: "Diversification helps you:", options: ["Maximise risk", "Focus on one stock", "Reduce risk across assets", "Avoid taxes"], answer: 2 },
];

const levelConfig = {
  beginner:     { color: "#1A9E8F", bg: "#E6F7F5" },
  intermediate: { color: "#E91E8C", bg: "#FDE8F4" },
  advanced:     { color: "#2563EB", bg: "#EBF2FF" },
};

// ─── Quiz Component ───────────────────────────────────────────────────────────
function Quiz({ onPass }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = quizData.filter((q, i) => answers[i] === q.answer).length;
  const allCorrect = score === quizData.length;

  return (
    <div>
      {quizData.map((q, qi) => (
        <div key={qi} style={{
          background: "#F8F9FB", borderRadius: 12, padding: 20, marginBottom: 16,
          border: submitted ? (answers[qi] === q.answer ? "1.5px solid #1A9E8F" : "1.5px solid #E05C5C") : "1.5px solid #E5E7EB",
          transition: "border 0.3s",
        }}>
          <p style={{ fontWeight: 700, color: "#1A1A2E", marginBottom: 12, fontSize: 15 }}>
            {qi + 1}. {q.q}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              const correct = oi === q.answer;
              let bg = "#fff", border = "#E5E7EB", color = "#4B5563";
              if (selected) { bg = "#FDE8F4"; border = "#E91E8C"; color = "#E91E8C"; }
              if (submitted && correct) { bg = "#E6F7F5"; border = "#1A9E8F"; color = "#1A9E8F"; }
              if (submitted && selected && !correct) { bg = "#FEE2E2"; border = "#E05C5C"; color = "#E05C5C"; }
              return (
                <button key={oi} disabled={submitted}
                  onClick={() => !submitted && setAnswers({ ...answers, [qi]: oi })}
                  style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 8, padding: "10px 14px", cursor: submitted ? "default" : "pointer", color, fontWeight: selected ? 600 : 400, textAlign: "left", fontSize: 14, transition: "all 0.2s" }}>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button onClick={() => { setSubmitted(true); if (allCorrect) onPass(); }}
          disabled={Object.keys(answers).length < quizData.length}
          style={{ background: "#E91E8C", color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 15, cursor: Object.keys(answers).length < quizData.length ? "not-allowed" : "pointer", opacity: Object.keys(answers).length < quizData.length ? 0.5 : 1 }}>
          Submit Quiz
        </button>
      ) : (
        <div style={{ background: allCorrect ? "#E6F7F5" : "#FEF3C7", border: `1.5px solid ${allCorrect ? "#1A9E8F" : "#F59E0B"}`, borderRadius: 10, padding: "14px 20px" }}>
          <p style={{ margin: 0, fontWeight: 700, color: allCorrect ? "#1A9E8F" : "#92400E", fontSize: 15 }}>
            {allCorrect ? "🎉 Perfect! Module marked as complete." : `You got ${score}/${quizData.length} — review the modules and try again!`}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Content Section Renderer ─────────────────────────────────────────────────
function Section({ section, index }) {
  return (
    <div style={{
      opacity: 0, animation: `fadeUp 0.5s ease forwards`,
      animationDelay: `${index * 0.12}s`, marginBottom: 28,
    }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>
        {section.heading}
      </h3>

      {section.highlight && (
        <div style={{ background: "linear-gradient(135deg, #FDE8F4, #EBF2FF)", border: "1.5px solid #E91E8C", borderRadius: 10, padding: "12px 18px", marginBottom: 12, fontWeight: 700, color: "#1A1A2E", fontSize: 15 }}>
          {section.highlight}
        </div>
      )}

      {section.body && (
        <p style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
          {section.body}
        </p>
      )}

      {section.bullets && (
        <ul style={{ paddingLeft: 20, margin: "8px 0 0", color: "#4B5563", fontSize: 15, lineHeight: 2 }}>
          {section.bullets.map((b, i) => (
            <li key={i}><span style={{ fontWeight: 600, color: "#1A1A2E" }}>{b.split("—")[0]}</span>{b.includes("—") ? `—${b.split("—")[1]}` : ""}</li>
          ))}
        </ul>
      )}

      {section.table && (
        <div style={{ overflowX: "auto", marginTop: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>{section.table.headers.map((h, i) => <th key={i} style={{ background: "#F8F9FB", color: "#1A1A2E", padding: "10px 14px", textAlign: "left", borderBottom: "2px solid #E5E7EB", fontWeight: 700 }}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  {row.map((cell, ci) => <td key={ci} style={{ padding: "10px 14px", color: "#4B5563" }}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Main Resource Page ───────────────────────────────────────────────────────
export default function ResourcePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = moduleData[moduleId];

  const [completed, setCompleted] = useState(false);
  const [marking, setMarking] = useState(false);
  const [justMarked, setJustMarked] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  // Animate header in
  useEffect(() => { setTimeout(() => setHeaderVisible(true), 50); }, []);

  // Auto-dismiss toast
  useEffect(() => {
    if (justMarked) {
      const t = setTimeout(() => setJustMarked(false), 4000);
      return () => clearTimeout(t);
    }
  }, [justMarked]);

  // Check if this module is already completed for this user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setCheckingStatus(false); return; }

    fetch(`${API}/api/progress`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.completedModules?.includes(moduleId)) setCompleted(true);
      })
      .catch(console.error)
      .finally(() => setCheckingStatus(false));
  }, [moduleId]);

  // Call backend to mark complete
  const markComplete = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);           // 👈 ADD
  console.log("Marking:", marking);       // 👈 ADD  
  console.log("Completed:", completed);   // 👈 ADD
  
  if (!token || marking || completed) {
    console.log("Blocked! token:", !!token, "marking:", marking, "completed:", completed);
    return;
  }
    setMarking(true);
    try {
      const res = await fetch(`${API}/api/progress/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ moduleId }),
      });
      const data = await res.json();
      if (data.completedModules) {
        setCompleted(true);
        if (data.justCompleted) setJustMarked(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setMarking(false);
    }
  };

  if (!module) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8F9FB" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
        <h2 style={{ color: "#1A1A2E", fontWeight: 800 }}>Module not found</h2>
        <button onClick={() => navigate("/resource")} style={{ marginTop: 16, background: "#E91E8C", color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px", fontWeight: 700, cursor: "pointer" }}>
          ← Back to Learning Center
        </button>
      </div>
    </div>
  );

  const lvl = levelConfig[module.level];

  return (
    <div style={{ minHeight: "100vh", background: "#F8F9FB", fontFamily: "'Segoe UI', sans-serif", paddingBottom: 80 }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(233,30,140,0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(233,30,140,0); }
        }
      `}</style>

      {/* ── Top Navigation Bar ── */}
      <div style={{
        background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 0",
        opacity: headerVisible ? 1 : 0, transform: headerVisible ? "translateY(0)" : "translateY(-10px)",
        transition: "all 0.4s ease", position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          <button onClick={() => navigate("/resource")}
            style={{ background: "transparent", border: "1.5px solid #E5E7EB", borderRadius: 8, padding: "7px 16px", cursor: "pointer", color: "#4B5563", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s" }}
            onMouseEnter={e => e.target.style.borderColor = "#E91E8C"}
            onMouseLeave={e => e.target.style.borderColor = "#E5E7EB"}>
            ← Learning Center
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: lvl.color, background: lvl.bg, borderRadius: 20, padding: "4px 12px", textTransform: "capitalize" }}>
              {module.level}
            </span>
            <span style={{ fontSize: 13, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 4 }}>
              ⏱ {module.duration}
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#E91E8C" }}>+{module.xp} XP</span>

            {/* Completed badge in navbar */}
            {completed && (
              <span style={{ fontSize: 11, fontWeight: 700, color: "#1A9E8F", background: "#E6F7F5", borderRadius: 20, padding: "4px 12px", animation: "fadeUp 0.3s ease" }}>
                ✓ Completed
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 740, paddingTop: 48 }}>

        {/* ── Title ── */}
        <div style={{ opacity: 0, animation: "fadeUp 0.5s ease 0.1s forwards" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.02em", marginBottom: 8 }}>
            {module.title}
          </h1>
          <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #E91E8C, #2563EB)", borderRadius: 99, marginBottom: 36 }} />
        </div>

        {/* ── Content Card ── */}
        <div style={{
          background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: 20,
          padding: "36px 40px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: 28,
          opacity: 0, animation: "fadeUp 0.5s ease 0.2s forwards",
        }}>
          {module.isQuiz
            ? <Quiz onPass={markComplete} />
            : module.sections.map((section, i) => <Section key={i} section={section} index={i} />)
          }
        </div>

        {/* ── Mark Complete Footer (not for quiz — quiz auto-completes) ── */}
        {!module.isQuiz && (
          <div style={{
            background: "#fff", border: completed ? "1.5px solid #1A9E8F" : "1.5px solid #E5E7EB",
            borderRadius: 20, padding: "24px 32px",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            opacity: 0, animation: "fadeUp 0.5s ease 0.4s forwards",
            transition: "border 0.4s ease",
          }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, color: "#1A1A2E", fontSize: 17 }}>
                {completed ? "✅ Module Completed!" : "Done reading?"}
              </p>
              <p style={{ margin: "5px 0 0", color: "#9CA3AF", fontSize: 13 }}>
                {completed
                  ? `You earned +${module.xp} XP for completing this module.`
                  : `Click below to earn +${module.xp} XP and mark this as done.`}
              </p>
            </div>

            {!checkingStatus && !completed && (
              <button onClick={markComplete} disabled={marking}
                style={{
                  background: marking ? "#F3F4F6" : "linear-gradient(135deg, #E91E8C, #2563EB)",
                  color: marking ? "#9CA3AF" : "#fff",
                  border: "none", borderRadius: 12,
                  padding: "13px 30px", fontWeight: 700, fontSize: 15,
                  cursor: marking ? "not-allowed" : "pointer",
                  boxShadow: marking ? "none" : "0 4px 16px rgba(233,30,140,0.35)",
                  minWidth: 200, transition: "all 0.2s",
                  animation: !marking ? "pulse 2s infinite" : "none",
                }}>
                {marking ? "Saving..." : "✓ Mark as Complete"}
              </button>
            )}

            {completed && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => navigate("/resource")}
                  style={{ background: "#E6F7F5", color: "#1A9E8F", border: "1.5px solid #1A9E8F", borderRadius: 12, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  ← All Modules
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Success Toast ── */}
      {justMarked && (
        <div style={{
          position: "fixed", bottom: 32, right: 32, zIndex: 9999,
          background: "#1A1A2E", color: "#fff", borderRadius: 16,
          padding: "18px 26px", fontWeight: 600, fontSize: 15,
          boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
          display: "flex", alignItems: "center", gap: 14,
          animation: "slideUp 0.35s ease",
        }}>
          <span style={{ fontSize: 28 }}>🎉</span>
          <div>
            <div style={{ fontWeight: 700 }}>Module complete!</div>
            <div style={{ fontSize: 13, color: "#E91E8C", fontWeight: 700, marginTop: 2 }}>
              +{module.xp} XP added to your profile
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
