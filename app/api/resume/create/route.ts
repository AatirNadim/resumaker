import { NextRequest, NextResponse } from "next/server";
import { createResumeHandler } from "./create.middleware";

export async function POST(req: NextRequest) {
  try {
    const resumeId = await createResumeHandler(req);
    return NextResponse.json(
      { resumeId, message: "Resume created" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in resume handler: ", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
