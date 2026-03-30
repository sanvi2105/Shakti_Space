import UserProgress from "../models/userProgress.js";

// XP values for each module — must match your frontend module list
const MODULE_XP = {
  "stock-market":       25,
  "pe-ratios":          30,
  "candlestick-charts": 50,
  "diversification":    40,
  "options-trading":    75,
  "market-quiz":        60,
};

// ── GET /api/progress ─────────────────────────────────────────────────────────
// Returns the logged-in user's completed modules + total XP
export const getProgress = async (req, res) => {
  try {
    // req.user.id comes from your verifyToken middleware
    let progress = await UserProgress.findOne({ userId: req.user.id });

    // First time? Create an empty record automatically
    if (!progress) {
      progress = await UserProgress.create({
        userId: req.user.id,
        completedModules: [],
        xpEarned: 0,
      });
    }

    res.json({
      completedModules: progress.completedModules,
      xpEarned: progress.xpEarned,
    });
  } catch (err) {
    console.error("getProgress error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── POST /api/progress/complete ───────────────────────────────────────────────
// Body: { moduleId: "stock-market" }
// Marks a module complete + awards XP (only once, never duplicate)
export const markComplete = async (req, res) => {
    console.log("req.user:", req.user);   //  ADD THIS
  console.log("body:", req.body);       //  ADD THIS
  try {
    const { moduleId } = req.body;

    if (!moduleId) {
      return res.status(400).json({ message: "moduleId is required" });
    }

    const xpForModule = MODULE_XP[moduleId];
    if (xpForModule === undefined) {
      return res.status(404).json({ message: "Module not found" });
    }

    // Check if already completed (to avoid awarding XP twice)
    let progress = await UserProgress.findOne({ userId: req.user.id });
    const alreadyCompleted = progress?.completedModules?.includes(moduleId);

    // $addToSet = add only if not already in array (no duplicates)
    // $inc = add XP only if this is the first time
    progress = await UserProgress.findOneAndUpdate(
      { userId: req.user.id },
      {
        $addToSet: { completedModules: moduleId },
        ...(alreadyCompleted ? {} : { $inc: { xpEarned: xpForModule } }),
      },
      { upsert: true, new: true } // create if doesn't exist, return updated doc
    );

    res.json({
      completedModules: progress.completedModules,
      xpEarned: progress.xpEarned,
      justCompleted: !alreadyCompleted, // tells frontend if this is a new completion
      xpAwarded: alreadyCompleted ? 0 : xpForModule,
    });
  } catch (err) {
    console.error("markComplete error:", err);
    res.status(500).json({ message: "Server error" });
  }
};