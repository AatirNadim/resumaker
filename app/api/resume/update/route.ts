import { NextRequest, NextResponse } from "next/server";
import { ResumeComponentType } from "@/app/types";
import {
  updateEducation,
  updateExperience,
  updatePersonalDetails,
  updateSkills,
  updateSummary,
} from "./update.middleware";

export async function POST(req: NextRequest) {
  try {
    const { id, resumeId, type, payload } = await req.json();
    let uid = "";
    switch (type) {
      case ResumeComponentType.PersonDetails:
        uid = await updatePersonalDetails(id, resumeId, payload);
        break;
      case ResumeComponentType.Experience:
        uid = await updateExperience(id, resumeId, payload);
        break;
      case ResumeComponentType.Education:
        uid = await updateEducation(id, resumeId, payload);
        break;
      case ResumeComponentType.Skills:
        uid = await updateSkills(id, resumeId, payload);
        break;
      case ResumeComponentType.Summary:
        await updateSummary(resumeId, payload);
        break;
      default:
        return NextResponse.json(
          { error: "Invalid resume component type" },
          { status: 400 }
        );
    }
    return NextResponse.json(
      { message: "Resume updated", uid },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
