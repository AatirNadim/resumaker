"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import GlobalApi from "@lib/apiCalls";
import ResumeCardItem from "./_fragments/ResumeCardItem";
import { ResumeNode } from "../types";
import { toast } from "../_components/ui/use-toast";

const ResumeGridComp = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(false);
  const [resumeList, setResumeList] = React.useState<ResumeNode[]>([]);
  useEffect(() => {
    console.log("resumeList as present in the local: ", resumeList);
  }, [resumeList]);

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
    <>
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
    </>
  );
};

export default ResumeGridComp;
