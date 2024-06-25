import { NextRequest } from "next/server";
import type { ResumeWrapper } from "@prisma/client";
import {
  getEducationHandler,
  getExperienceHandler,
  getResumeFromDb,
  getResumeFromDbById,
  getSkillHandler,
  personalInfoHandler,
} from "./get.db";
import { ResumeNode } from "@/app/types";
// import { ResumeWrapperDto } from "../dtos/resumeWrapper.dto";

export const getResumeHandler = async (
  req: NextRequest
): Promise<ResumeNode[]> => {
  try {
    const userEmail = req.nextUrl.searchParams.get("userEmail");
    const resumeId = req.nextUrl.searchParams.get("resumeId");
    if (resumeId) {
      const resumeWrapper = await getResumeFromDbById(resumeId);
      if (!resumeWrapper) {
        throw new Error("Resume with the given id not found");
      }
      return await formatResumes([resumeWrapper]);
    }
    console.log("\n\n===== userEmail: ", userEmail, "=====\n\n");
    if (!userEmail) {
      throw new Error("User email not provided");
    }
    const userResumeWrappers = await getResumeFromDb(userEmail);
    return await formatResumes(userResumeWrappers);
  } catch (err) {
    console.error("Error in getResumeHandler: ", err);
    throw err;
  }
};

export const formatResumes = async (
  resumeWrappers: ResumeWrapper[]
): Promise<ResumeNode[]> => {
  try {
    const promiseArr = resumeWrappers.map(async (resumeWrapper) => {
      const expNodes =
        (await getExperienceHandler(resumeWrapper.resumeId)) || [];
      const educationNodes =
        (await getEducationHandler(resumeWrapper.resumeId)) || [];
      const skillNodes = (await getSkillHandler(resumeWrapper.resumeId)) || [];
      const personalDetails =
        (await personalInfoHandler(resumeWrapper.resumeId)) || [];
      return {
        ...resumeWrapper,
        experience: expNodes,
        education: educationNodes,
        skills: skillNodes,
        personDetails: personalDetails,
      } as ResumeNode;
    });

    const res = await Promise.all(promiseArr);
    console.log(
      "\n\n===== fetched all the resume details for email id: \n\n",
      JSON.stringify(res),
      "=====\n\n"
    );

    return res;
  } catch (err) {
    throw err;
  }
};
