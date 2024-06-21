import { useResumeContext } from "@/app/context/ResumeContext";

function PersonalDetailPreview() {
  const { resumeObj } = useResumeContext();
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeObj?.themeColor,
        }}
      >
        {resumeObj?.firstName} {resumeObj?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">{resumeObj?.jobTitle}</h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: resumeObj?.themeColor,
        }}
      >
        {resumeObj?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{
            color: resumeObj?.themeColor,
          }}
        >
          {resumeObj?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{
            color: resumeObj?.themeColor,
          }}
        >
          {resumeObj?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeObj?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
