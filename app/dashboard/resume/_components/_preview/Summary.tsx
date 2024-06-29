import { useResumeContext } from "@/app/context/ResumeContext";

function SummeryPreview() {
  const { resumeObj } = useResumeContext();

  return <p className="text-xs">{resumeObj.summary}</p>;
}

export default SummeryPreview;
