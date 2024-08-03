import { useResumeStore } from "@/app/context/ResumeContext";

function SkillsPreview() {
  const { resumeObj } = useResumeStore();

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

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeObj?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skill.skill}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeObj?.themeColor,
                  width: skill?.rating * 20 + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
