import { NextRequest, NextResponse } from "next/server";
import { ResumeComponentType } from "@/app/types";
import {
  updateEducation,
  updateExperience,
  updatePersonalDetails,
  updateSkills,
} from "./update.middleware";

export default async function handler(req: NextRequest) {
  try {
    const { id, resumeId, type, payload } = await req.json();
    switch (type) {
      case ResumeComponentType.PersonDetails:
        await updatePersonalDetails(id, resumeId, payload);
        break;
      case ResumeComponentType.Experience:
        await updateExperience(id, resumeId, payload);
        break;
      case ResumeComponentType.Education:
        await updateEducation(id, resumeId, payload);
        break;
      case ResumeComponentType.Skills:
        await updateSkills(id, resumeId, payload);
        break;
      default:
        return NextResponse.json(
          { error: "Invalid resume component type" },
          { status: 400 }
        );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
