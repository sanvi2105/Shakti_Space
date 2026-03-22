
import express from "express";
import { getProgress, markComplete } from "../controllers/progressController.js";
import { protect } from "../middleware/authMiddleware.js"; // your existing middleware ✅

const router = express.Router();

router.get("/", protect, getProgress);             // GET  /api/progress
router.post("/complete", protect, markComplete);   // POST /api/progress/complete

export default router;