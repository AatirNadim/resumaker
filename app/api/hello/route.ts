// "use server"

import { NextRequest, NextResponse } from "next/server";

// export default function handler(req: NextRequest) {
//   try {
//     // console.log("res object --> ", res);
//     return NextResponse.json({ message: "Hello, World!" }, { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Internal Server Error" }
//       { status: 500 }
//     );
//   }
// }

export async function GET(req: NextRequest) {
  try {
    // const val = 
    // const res = new Response("slskalks");
    return NextResponse.json({ message: "Hello, World!" }, { status: 200 })
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
