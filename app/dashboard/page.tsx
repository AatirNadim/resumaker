"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import GlobalApi from "@lib/apiCalls";
import AddResume from "./_fragments/AddResume";
import ResumeCardItem from "./_fragments/ResumeCardItem";
import { ResumeNode } from "../types";
import { toast } from "../_components/ui/use-toast";
// import ResumeContextProvider from "../context/ResumeContext";

const page = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(false);
  const [resumeList, setResumeList] = React.useState<ResumeNode[]>([]);

  // useEffect(() => {
  //   console.log("resumeList: ", resumeList);
  // }, [resumeList]);

  useEffect(() => {
    if (!user?.primaryEmailAddress?.emailAddress) return;
    const email = user.primaryEmailAddress.emailAddress;
    GetResumesList(email);
  }, [user]);

  const GetResumesList = (email: string) => {
    try {
      setLoading(true);
      GlobalApi.GetUserResumes(email).then((data) => {
        console.log("data from the server: ", data);
        setResumeList(() => data);
        // console.log(resp.data.data);
        // setResumeList(resp.data.data);
      });
    } catch (err: any) {
      console.error(err);
      setErr(true);
      toast({
        variant: "destructive",
        description: err.error || err.message || "Failed to fetch resumes",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resumes</h2>
      <p>Start Creating AI resume to land your next role</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
      >
        <AddResume />
        {loading ? (
          [1, 2, 3, 4].map((_, index) => (
            <div
              className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
              key={index}
            ></div>
          ))
        ) : err ? (
          <span className="text-red-500">Failed to fetch resumes</span>
        ) : (
          resumeList.map((resume, index) => (
            <ResumeCardItem
              resume={resume}
              key={index}
              refreshData={GetResumesList}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default page;
