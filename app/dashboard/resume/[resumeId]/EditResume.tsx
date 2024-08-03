"use client";

import React, { useEffect, useState } from "react";
import FormSection from "../_components/FormSection";
import ResumePreview from "../_components/ResumePreview";
import GlobalApi from "@lib/apiCalls";

// import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useResumeStore } from "@/app/context/ResumeContext";

interface Props {
  id: string;
}

function EditResume({ id }: Props) {
  const { setResumeObj } = useResumeStore();

  useEffect(() => {
    if (!id) return;
    GetresumeObj();
  }, []);

  const GetresumeObj = () => {
    try {
      GlobalApi.GetResumeById(id as string).then((resp) => {
        console.log("resume details: ", resp);
        setResumeObj(resp);
      });
    } catch (err) {
      console.error(err);
      toast(`Error while fetching resume data: ${err}`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <FormSection />
      <ResumePreview />
    </div>
  );
}

export default EditResume;
