import app from "./src/app";
import dotenv from "dotenv";
import connectDB from "./src/config/db";

connectDB();
dotenv.config();

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});