import express from "express";
import { getData, updateStats, addTimeline, deleteTimeline, editTimeline } from "../Controllers/DataController.js";
import { verifyUser } from "../Middleware/verifyUser.js";

const router = express.Router();

// Public: Get all data
router.get("/", getData);

// ✅ Admin only: update stats & manage timeline
router.put("/stats", verifyUser, updateStats);
router.post("/timeline", verifyUser, addTimeline);
router.delete("/timeline/:id", verifyUser, deleteTimeline);
router.put("/timeline/:id", verifyUser, editTimeline);

export default router;
