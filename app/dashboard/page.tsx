"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import Header from "../_components/Header";
import { Toaster } from "../_components/Toaster";
import GlobalApi from "@lib/apiCalls";
import AddResume from "./_fragments/AddResume";
import ResumeCardItem from "./_fragments/ResumeCardItem";
import { ResumeNode } from "../types";
// import { GetUserResumes } from "../lib/apiCalls";

const page = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [resumeList, setResumeList] = React.useState<ResumeNode[]>([]);

  useEffect(() => {
    if (!user?.primaryEmailAddress?.emailAddress) return;
    const email = user.primaryEmailAddress.emailAddress;
    GetResumesList(email);
  }, [user]);

  const GetResumesList = (email: string) => {
    GlobalApi.GetUserResumes(email).then((data) => {
      console.log("data from the server: ", data);
      // console.log(resp.data.data);
      // setResumeList(resp.data.data);
    });
    // console.log("resumes: ", resumes);
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
      >
        <AddResume />
        {resumeList.length > 0
          ? resumeList.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={GetResumesList}
              />
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
                key={index}
              ></div>
            ))}
      </div>
    </div>
  );
};

export default page;
