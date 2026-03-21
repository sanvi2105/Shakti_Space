import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import {applyJob} from "../controllers/applicationController.js";

const router = express.Router();

router.post("/apply", verifyToken, applyJob);

export default router;