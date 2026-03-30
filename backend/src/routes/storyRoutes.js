import express from "express";
import { addStory,getStories} from "../controllers/storyController.js";

const router = express.Router();

router.post("/", addStory);
router.get("/", getStories)


export default router;