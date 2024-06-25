import prisma from "@/app/lib/prisma";

import { EducationNode, PersonNode, ResumeNode } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

const createResumeEntry = async (
  resumeName: string,
  userEmail: string
): Promise<string> => {
  try {
    const ret = await prisma.resumeWrapper.create({
      data: {
        resumeName,
        userEmail,
      },
    });
    return ret.resumeId;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createEducationEntry = async (
  resumeId: string,
  educationNodes: EducationNode[]
) => {
  try {
    await prisma.education.create({
      data: {
        resumeId,
        educationNodes,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createExperienceEntry = async (
  resumeId: string,
  experienceNodes: any
) => {
  try {
    await prisma.experience.create({
      data: {
        resumeId,
        experienceNodes,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createSkillEntry = async (resumeId: string, skills: any) => {
  try {
    await prisma.skills.create({
      data: {
        resumeId,
        skillNodes: skills,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createPersonalDetailsEntry = async (
  resumeId: string,
  personDetails: PersonNode
) => {
  try {
    await prisma.personalDetails.create({
      data: {
        resumeId,
        ...personDetails,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createResumeHandler = async (req: NextRequest) => {
  try {
    const { resumeName, userEmail } = await req.json();
    console.log(
      "\n\n==================resumeName: ",
      resumeName,
      "userEmail: ",
      userEmail,
      "==================\n\n"
    );

    const resumeId = await createResumeEntry(resumeName, userEmail);

    console.log(
      "\n\n==================resumeId: ",
      resumeId,
      "==================\n\n"
    );

    return resumeId;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
