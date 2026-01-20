import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existing = await userModel.findOne({ email });

        if (existing) {
            return res.status(401).json({
                message: "Email already in use!"
            });
        }

        const hashed = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            email,
            password: hashed
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(201).json({
            message: "Account created successfully!",
            id: user._id,
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials!"
            });
        }

        const verifyUser = await bcrypt.compare(password, user.password);
        if (!verifyUser) {
            return res.status(401).json({
                message: "Incorrect password!"
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({
            message: "Login successful!",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}