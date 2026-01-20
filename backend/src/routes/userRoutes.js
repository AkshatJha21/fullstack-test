import express from "express";
import { login, signup } from "../controllers/userController";

const router = express.Router();

router.post("/", signup);
router.post("/", login);

export default router;