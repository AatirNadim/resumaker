import { NextRequest } from "next/server";
import prisma from "@/prisma/index";
import { ResumeWrapperDto } from "../dtos/resumeWrapper.dto";

export const getResumeHandler = async (req: NextRequest) => {
  try {
    const userEmail = req.nextUrl.searchParams.get("userEmail");
    if (!userEmail) {
      throw new Error("User email not provided");
    }
    const userResumeWrappers = (await prisma.resumeWrapper.findMany({
      where: { userEmail },
    })) as ResumeWrapperDto[];
    return await formatResumes(userResumeWrappers);
  } catch (err) {
    console.error("Error in getResumeHandler: ", err);
    throw err;
  }
};

export const getExperienceHandler = async (resumeWrapper: ResumeWrapperDto) => {
  try {
    const experiences = await prisma.experience.findMany({
      where: { resumeId: resumeWrapper.resumeId },
    });
  } catch (err) {
    throw err;
  }
};

export const formatResumes = async (resumeWrappers: ResumeWrapperDto[]) => {
  try {
  } catch (err) {
    throw err;
  }
};
