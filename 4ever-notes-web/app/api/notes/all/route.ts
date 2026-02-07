import connectDB from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Note from "@/models/noteModel";
import { verify } from "jsonwebtoken";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const authHeader = request.headers.get("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 }
            );
        }

        const token = authHeader.split(" ")[1];
        const isUser = verify(token, process.env.TOKEN_SECRET!)
        let userId;

        if (isUser) {
            const decoded = verify(token, process.env.TOKEN_SECRET!) as { id: string };
            userId = decoded.id;
        } else {
            return NextResponse.json({
                message: "You are not logged in",
            }, {
                status: 400
            });
        }

        if (!userId) {
            return NextResponse.json({
                error: "User id not found",
            }, {
                status: 404
            });
        }

        const notes = await Note.find({
            user: userId
        });

        return NextResponse.json({
            message: "Notes fetched successfully",
            notes
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