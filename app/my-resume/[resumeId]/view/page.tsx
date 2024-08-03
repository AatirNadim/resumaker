import React from "react";
import ViewResume from "../ViewResume";

interface Props {
  params: { resumeId: string };
}

const page = ({ params }: Props) => {
  return (
    // <ResumeContextProvider>
    <ViewResume resumeId={params.resumeId} />
    // </ResumeContextProvider>
  );
};

export default page;
