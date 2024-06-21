// import { resumeObjContext } from "@/context/resumeObjContext";
import React, { useContext } from "react";
import PersonalDetailPreview from "./_preview/PersonalDetail";
import SummeryPreview from "./_preview/Summary";
import ExperiencePreview from "./_preview/Experience";
import EducationalPreview from "./_preview/Education";
import SkillsPreview from "./_preview/Skills";
import { useResumeContext } from "@/app/context/ResumeContext";

function ResumePreview() {
  const { resumeObj, setResumeObj } = useResumeContext();

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeObj?.themeColor,
      }}
    >
      {/* Personal Detail  */}
      <PersonalDetailPreview resumeObj={resumeObj} />
      {/* Summery  */}
      <SummeryPreview resumeObj={resumeObj} />
      {/* Professional Experience  */}
      {resumeObj?.Experience?.length > 0 && (
        <ExperiencePreview resumeObj={resumeObj} />
      )}
      {/* Educational  */}
      {resumeObj?.education?.length > 0 && (
        <EducationalPreview resumeObj={resumeObj} />
      )}
      {/* Skilss  */}
      {resumeObj?.skills?.length > 0 && <SkillsPreview resumeObj={resumeObj} />}
    </div>
  );
}

export default ResumePreview;