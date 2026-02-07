import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import connectDB from "@/dbConfig/dbConfig";
import { sign } from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const reqBody = await request.json();
        const { email, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                error: "User does not exist"
            }, {
                status: 400
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json({
                error: "Incorrect password"
            }, {
                status: 400
            });
        }

        const token = sign({id: user._id}, process.env.TOKEN_SECRET!, {
            expiresIn: "1d"
        });

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            token
        }, {
            status: 200
        });

        return response;
    } catch (error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}