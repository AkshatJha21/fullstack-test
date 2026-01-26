import express from "express";
import { checkUser, login, signup } from "../controllers/userController.js";
import { verifyJwt } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", verifyJwt, checkUser);

export default router;