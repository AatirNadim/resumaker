import prisma from "@/app/lib/prisma";

export const updatePersonalDetails = async (
  personalDetailId: string,
  resumeId: string,
  payload: any
) => {
  try {
    console.log(
      "\n\nupdating person details --> ",
      personalDetailId,
      payload,
      "\n\n"
    );
    if (!personalDetailId || personalDetailId == "") {
      const res = await prisma.personalDetails.create({
        data: {
          ...payload,
          resumeId,
        },
      });
      return res.personalDetailId;
    }
    await prisma.personalDetails.update({
      where: { personalDetailId },
      data: payload,
    });
    return personalDetailId;
  } catch (err) {
    throw err;
  }
};

export const updateExperience = async (
  experienceId: string,
  resumeId: string,
  payload: any
) => {
  try {
    if (!experienceId || experienceId == "") {
      const res = await prisma.experience.create({
        data: {
          ...payload,
          resumeId,
        },
      });
      return res.experienceId;
    }
    await prisma.experience.update({
      where: { experienceId },
      data: payload,
    });

    return experienceId;
  } catch (err) {
    throw err;
  }
};

export const updateEducation = async (
  educationId: string,
  resumeId: string,
  payload: any
) => {
  try {
    if (!educationId || educationId == "") {
      const res = await prisma.education.create({
        data: {
          ...payload,
          resumeId,
        },
      });
      return res.educationId;
    }
    await prisma.education.update({
      where: { educationId },
      data: payload,
    });

    return educationId;
  } catch (err) {
    throw err;
  }
};

export const updateSkills = async (
  skillId: string,
  resumeId: string,
  payload: any
) => {
  try {
    if (!skillId || skillId == "") {
      const res = await prisma.skills.create({
        data: {
          ...payload,
          resumeId,
        },
      });
      return res.skillId;
    }
    await prisma.skills.update({
      where: { skillId },
      data: payload,
    });

    return skillId;
  } catch (err) {
    throw err;
  }
};
