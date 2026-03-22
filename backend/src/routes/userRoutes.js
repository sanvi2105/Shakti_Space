import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import authorizeRole from "../middleware/roleMiddleware.js";
const router = express.Router();

//only org can access
router.get("/org", protect, authorizeRole("organisation"), (req, res) => {
    res.json({message: "Welcome Organisation"});
});

//only user can access
router.get("/user", protect, authorizeRole("user"), (req, res) => {
    res.json({message: "Welcome User"});
});

export default router;