import { NextRequest, NextResponse } from "next/server";

export const createResumeHandler = async (req: NextRequest) => {
  try {
    const { body } = req;
    console.log(body);
    return NextResponse.json(
      { message: "Create resume details" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};
