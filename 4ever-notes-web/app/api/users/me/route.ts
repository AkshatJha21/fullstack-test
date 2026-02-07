import connectDB from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
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
        const isUser = verify(token, process.env.TOKEN_SECRET!);

        if (isUser) {
            const decoded = verify(token, process.env.TOKEN_SECRET!) as { id: string };
            return NextResponse.json({
                details: decoded,
            }, {
                status: 200
            });
        } else {
            return NextResponse.json({
                message: "You are not logged in",
            }, {
                status: 400
            });
        }
    } catch (error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}