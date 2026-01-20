import express from "express";
import { verifyJwt } from "../middleware/authMiddleware.js";
import { createNote, getNotes } from "../controllers/noteController.js";

const router = express.Router();

router.post("/", verifyJwt, createNote);
router.get("/", verifyJwt, getNotes);

export default router;