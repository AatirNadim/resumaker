import { NextRequest } from "next/server";
import prisma from "@/prisma/index";
import { Prisma } from "@prisma/client";
// import { ResumeWrapperDto } from "../dtos/resumeWrapper.dto";

export const getResumeHandler = async (req: NextRequest) => {
  try {
    const userEmail = req.nextUrl.searchParams.get("userEmail");
    console.log("\n\n===== userEmail: ", userEmail, "=====\n\n");
    if (!userEmail) {
      throw new Error("User email not provided");
    }
    const userResumeWrappers = await prisma.resumeWrapper.findMany({
      where: { userEmail },
      orderBy: { createdAt: "desc" },
    });
    // return await formatResumes(userResumeWrappers);
    return userResumeWrappers;
  } catch (err) {
    console.error("Error in getResumeHandler: ", err);
    throw err;
  }
};

export const getExperienceHandler = async (
  resumeWrapper: typeof prisma.resumeWrapper.fields
) => {
  try {
    const experiences = await prisma.experience.findMany({
      // where: { resumeId: resumeWrapper. },
    });
  } catch (err) {
    throw err;
  }
};

export const formatResumes = async (resumeWrappers: any[]) => {
  try {
  } catch (err) {
    throw err;
  }
};
