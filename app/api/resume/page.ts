import { NextRequest, NextResponse } from "next/server";
import { getResumeHandler } from "./middleware/resume.get";
import { createResumeHandler } from "./create/page";

export default async function handler(req: NextRequest) {
  try {
    switch (req.method) {
      case "GET":
        // Get resume details
        return getResumeHandler(req);
      default:
        return NextResponse.json(
          { error: "Method not allowed" },
          { status: 405 }
        );
    }
  } catch (err) {
    console.error("Error in resume handler: ", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
