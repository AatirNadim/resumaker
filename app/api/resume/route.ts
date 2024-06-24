import { NextRequest, NextResponse } from "next/server";
import { getResumeHandler } from "./get.middleware";
// import { createResumeHandler } from "./create/page";

// export default async function handler(req: NextRequest) {

// }

export async function GET(req: NextRequest) {
  try {
    console.log("\n\ninside the get resume handler, req: ", req, "\n\n");

    const resumes = await getResumeHandler(req);

    console.log(
      "\n\n===== resumes fetched from the db: ",
      JSON.stringify(resumes),
      "\n\n"
    );

    return NextResponse.json(
      { message: "Resume handler", resumes },
      { status: 200 }
    );
  } catch (err) {
    console.error("*******Error in resume handler: ", err);
    // return NextResponse(JSON.stringify({ error: "Internal server error" }), {
    //   status: 500,
    // });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
