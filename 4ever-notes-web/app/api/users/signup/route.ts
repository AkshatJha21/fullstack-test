import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import connectDB from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                error: "User already exists"
            }, {
                status: 400
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "1d"
        });

        return NextResponse.json({
            message: "User signup successful",
            success: true,
            savedUser,
            token
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}