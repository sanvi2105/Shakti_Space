import express from "express";
import {
  applyJob,
  getUserApplication,
  getAllApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";

const router = express.Router();

// USER
router.post("/", applyJob);
router.get("/my", getUserApplication);

// ORG
router.get("/", getAllApplications);
router.put("/:id", updateApplicationStatus);

export default router;