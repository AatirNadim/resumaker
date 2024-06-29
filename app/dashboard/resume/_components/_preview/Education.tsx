import { useResumeContext } from "@/app/context/ResumeContext";
import { EducationNode } from "@/app/types";

function EducationalPreview() {
  const { resumeObj } = useResumeContext();
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeObj?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeObj?.themeColor,
        }}
      />

      {resumeObj.education.map((education: EducationNode, index: number) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeObj?.themeColor,
            }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
