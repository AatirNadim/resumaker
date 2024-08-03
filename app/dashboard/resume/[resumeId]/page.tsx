"use client";
import React, { useEffect } from "react";
import EditResume from "./EditResume";

interface Props {
  params: { resumeId: string };
}

const page = ({ params }: Props) => {
  return (
    // <ResumeContextProvider>
    <EditResume id={params.resumeId} />
    // </ResumeContextProvider>
  );
};

export default page;
