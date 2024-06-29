import { NextRequest, NextResponse } from "next/server";
import { ResumeComponentType } from "@/app/types";
import {
  updateEducation,
  updateExperience,
  updatePersonalDetails,
  updateSkills,
} from "./update.middleware";

export async function POST(req: NextRequest) {
  try {
    const { id, resumeId, type, payload } = await req.json();
    let personalDetailId = "";
    switch (type) {
      case ResumeComponentType.PersonDetails:
        personalDetailId = await updatePersonalDetails(id, resumeId, payload);
        break;
      case ResumeComponentType.Experience:
        personalDetailId = await updateExperience(id, resumeId, payload);
        break;
      case ResumeComponentType.Education:
        personalDetailId = await updateEducation(id, resumeId, payload);
        break;
      case ResumeComponentType.Skills:
        personalDetailId = await updateSkills(id, resumeId, payload);
        break;
      default:
        return NextResponse.json(
          { error: "Invalid resume component type" },
          { status: 400 }
        );
    }
    return NextResponse.json(
      { message: "Resume updated", personalDetailId },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
