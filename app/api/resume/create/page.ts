import { NextRequest, NextResponse } from "next/server";
import { createResumeHandler } from "./create.middleware";

export default async function handler(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }
    
    return createResumeHandler(req);
  } catch (err) {
    console.error("Error in resume handler: ", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
