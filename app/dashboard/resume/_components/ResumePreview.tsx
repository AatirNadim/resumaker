"use client";
import React from "react";
import PersonalDetailPreview from "./_preview/PersonalDetail";
import SummeryPreview from "./_preview/Summary";
import ExperiencePreview from "./_preview/Experience";
import EducationalPreview from "./_preview/Education";
import SkillsPreview from "./_preview/Skills";
import { useResumeStore } from "@/app/context/ResumeContext";

function ResumePreview() {
  const { resumeObj } = useResumeStore();

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeObj?.themeColor,
      }}
    >
      {/* Personal Detail  */}
      <PersonalDetailPreview />
      {/* Summery  */}
      <SummeryPreview />
      {/* Professional Experience  */}
      {resumeObj.experience.length > 0 && <ExperiencePreview />}
      {/* Educational  */}
      {resumeObj.education.length > 0 && <EducationalPreview />}
      {/* Skilss  */}
      {resumeObj.skills.length > 0 && <SkillsPreview />}
    </div>
  );
}

export default ResumePreview;
