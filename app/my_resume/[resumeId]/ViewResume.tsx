import Header from "@/app/_components/Header";
import { Button } from "@/app/_components/ui/button";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ResumePreview from "@/app/dashboard/resume/_components/ResumePreview";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import GlobalApi from "@lib/apiCalls";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";
import ResumeContextProvider from "@/app/context/ResumeContext";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useRouter().query;

  useEffect(() => {
    GetResumeInfo();
  }, []);
  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp);
      setResumeInfo(resp);
    });
  };

  const HandleDownload = () => {
    window.print();
  };

  return (
    // <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
    <ResumeContextProvider>
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generates Resume is ready !{" "}
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share unique
            resume url with your friends and family{" "}
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open url to see it",
                url:
                  import.meta.env.VITE_BASE_URL +
                  "/my-resume/" +
                  resumeId +
                  "/view",
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              {" "}
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeContextProvider>
  );
}

export default ViewResume;
