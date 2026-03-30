import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  applyJob,
  getUserApplication,
  getAllApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";

const router = express.Router();

// USER
router.post("/", protect, applyJob);
router.get("/my", protect, getUserApplication);

// ORG
router.get("/", getAllApplications);
router.put("/:id", updateApplicationStatus);

export default router;