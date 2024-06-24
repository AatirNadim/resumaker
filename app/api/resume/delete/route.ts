import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  try {
  } catch (err) {
    console.error("Error in resume handler: ", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
