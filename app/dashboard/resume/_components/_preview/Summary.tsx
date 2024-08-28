"use client";

import { useResumeStore } from "@/app/context/ResumeContext";


function SummeryPreview() {
  const { resumeObj } = useResumeStore();

  return <p className="text-xs">{resumeObj.summary}</p>;
}

export default SummeryPreview;
