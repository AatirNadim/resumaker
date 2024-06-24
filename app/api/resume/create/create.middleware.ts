import prisma from "@/app/lib/prisma";

import { EducationNode, PersonNode, ResumeNode } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

const createResumeEntry = async (resumeNode: ResumeNode): Promise<string> => {
  try {
    const ret = await prisma.resumeWrapper.create({
      data: {
        resumeName: resumeNode.resumeName,
        userEmail: resumeNode.personDetails.email,
        summary: resumeNode.summary,
        themeColor: resumeNode.themeColor,
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
    const resumeNode = (await req.json()) as ResumeNode;

    const resumeId = await createResumeEntry(resumeNode);

    await createEducationEntry(resumeId, resumeNode.education);

    await createExperienceEntry(resumeId, resumeNode.experience);

    await createSkillEntry(resumeId, resumeNode.skills);

    await createPersonalDetailsEntry(resumeId, resumeNode.personDetails);

    return NextResponse.json(
      { message: "Create resume details" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};
