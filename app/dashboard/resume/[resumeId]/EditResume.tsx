import React, { useEffect, useState } from "react";
import FormSection from "../_components/FormSection";
import ResumePreview from "../_components/ResumePreview";
import GlobalApi from "@lib/apiCalls";
import ResumeContextProvider from "@/app/context/ResumeContext";
import { useRouter } from "next/router";
import { toast } from "sonner";

function EditResume() {
  // const { resumeId } = useParams();
  const { resumeId } = useRouter().query;
  // const [resumeObj, setResumeObj] = useState();
  useEffect(() => {
    GetresumeObj();
  }, []);

  const GetresumeObj = () => {
    try {
      GlobalApi.GetResumeById(resumeId).then((resp) => {
        console.log("resume details: ", resp.data.data);
        // setResumeObj(resp.data.data);
      });
    } catch (err) {
      console.error(err);
      toast(`Error while fetching resume data: ${err}`);
    }
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
