import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import authorizeRole from "../middleware/roleMiddleware.js";
const router = express.Router();

//only org can access
router.get("/org", verifyToken, authorizeRole("organisation"), (req, res) => {
    res.json({message: "Welcome Organisation"});
});

//only user can access
router.get("/user", verifyToken, authorizeRole("user"), (req, res) => {
    res.json({message: "Welcome User"});
});

export default router;