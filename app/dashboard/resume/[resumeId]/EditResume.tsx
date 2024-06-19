import React, { useEffect, useState } from "react";
import FormSection from "../../components/FormSection";
import ResumePreview
import GlobalApi from "./../../../../../service/GlobalApi";
import ResumeContextProvider from "@/app/context/ResumeContext";
import { useRouter } from "next/router";

function EditResume() {
  // const { resumeId } = useParams();
  const router = useRouter();
  const { resumeId } = router.query;
  const [resumeObj, setResumeObj] = useState();
  useEffect(() => {
    GetresumeObj();
  }, []);

  const GetresumeObj = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp.data.data);
      setResumeObj(resp.data.data);
    });
  };

  return (
    <ResumeContextProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section  */}
        <FormSection />
        {/* Preview Section  */}
        <ResumePreview />
      </div>
    </ResumeContextProvider>
  );
}

export default EditResume;
