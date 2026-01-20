import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

configDotenv();
connectDB();

app.use("/api/auth", userRoutes);
app.use("/api/notes", notesRoutes);

export default app;