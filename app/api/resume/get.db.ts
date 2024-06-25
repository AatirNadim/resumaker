import prisma from "@/app/lib/prisma";
import type {
  ResumeWrapper,
  ExperienceNode,
  EducationNode,
  SkillNode,
  PersonalDetails,
} from "@prisma/client";

export const getResumeFromDb = async (userEmail: string) => {
  try {
    const userResumeWrappers = await prisma.resumeWrapper.findMany({
      where: { userEmail },
      orderBy: { createdAt: "desc" },
    });
    // return await formatResumes(userResumeWrappers);
    console.log(
      "\n\n===== userResumeWrappers fetched from the db: ",
      userResumeWrappers,
      "=====\n\n"
    );
    return userResumeWrappers;
  } catch (err) {
    throw err;
  }
};

export const getResumeFromDbById = async (resumeId: string) => {
  try {
    const resumeWrapper = await prisma.resumeWrapper.findFirst({
      where: { resumeId },
    });
    // return await formatResumes([resumeWrapper]);
    console.log(
      "\n\n===== resumeWrapper fetched from the db: ",
      resumeWrapper,
      "=====\n\n"
    );
    return resumeWrapper;
  } catch (err) {
    throw err;
  }
};

export const getExperienceHandler = async (
  resumeId: string
): Promise<ExperienceNode[] | undefined> => {
  try {
    const experience = await prisma.experience.findFirst({
      where: { resumeId },
    });
    // if (!experience) {
    //   throw new Error(`Experience not found for resumeId: ${resumeId}`);
    // }
    const res = experience?.experienceNodes.sort((a, b) =>
      a.startDate.localeCompare(b.startDate)
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const getEducationHandler = async (
  resumeId: string
): Promise<EducationNode[] | undefined> => {
  try {
    const education = await prisma.education.findFirst({
      where: { resumeId },
    });
    // if (!education) {
    //   throw new Error(`Education not found for resumeId: ${resumeId}`);
    // }
    const res = education?.educationNodes.sort((a, b) =>
      a.startDate.localeCompare(b.startDate)
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const getSkillHandler = async (
  resumeId: string
): Promise<SkillNode[] | undefined> => {
  try {
    const skill = await prisma.skills.findFirst({
      where: { resumeId },
    });
    // if (!skill) {
    //   throw new Error(`Skill not found for resumeId: ${resumeId}`);
    // }
    const res = skill?.skillNodes;
    return res;
  } catch (err) {
    throw err;
  }
};

export const personalInfoHandler = async (
  resumeId: string
): Promise<PersonalDetails | null> => {
  try {
    const personalInfo = await prisma.personalDetails.findFirst({
      where: { resumeId },
    });
    // if (!personalInfo) {
    //   throw new Error(`PersonalInfo not found for resumeId: ${resumeId}`);
    // }
    return personalInfo;
  } catch (err) {
    throw err;
  }
};
