"use client"

import { useResumeStore } from "@/app/context/ResumeContext";
import { ExperienceNode } from "@/app/types";

function ExperiencePreview() {
  const { resumeObj } = useResumeStore();
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeObj?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeObj?.themeColor,
        }}
      />

      {resumeObj.experience.map((experience: ExperienceNode, index: number) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeObj?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName} {experience?.city},{experience?.state}
            <span>
              {experience?.startDate} To{" "}
              {experience?.currentlyWorking ? "Present" : experience.endDate}{" "}
            </span>
          </h2>
          {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
