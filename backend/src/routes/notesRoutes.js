import express from "express";
import { verifyJwt } from "../middleware/authMiddleware";
import { createNote, getNotes } from "../controllers/noteController";

const router = express.Router();

router.post("/", verifyJwt, createNote);
router.get("/", verifyJwt, getNotes);

export default router;