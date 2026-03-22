import express from "express";
import {applyJob,getUserApplication} from "../controllers/applicationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/apply", protect, applyJob);
router.get("/my",protect,getUserApplication);


export default router;