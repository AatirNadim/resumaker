import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest) {
  try {
    // console.log("res object --> ", res);
    const { body } = req;
    if (req.method === "GET") {
    } else {
      
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
