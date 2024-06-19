import React from "react";
import ResumeContextProvider from "@/app/context/ResumeContext";

const ViewResume = () => {
  return (
    <ResumeContextProvider>
      <div>ViewResume</div>
    </ResumeContextProvider>
  );
};

export default ViewResume;
