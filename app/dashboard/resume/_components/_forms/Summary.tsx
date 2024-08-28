"use client";

import { Button } from "@/app/_components/ui/button";
import { Textarea } from "@/app/_components/ui/textarea";
// import { resumeObjContext } from "@/context/resumeObjContext";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import GlobalApi from "@lib/apiCalls";
import { Brain, LoaderCircle } from "lucide-react";

import { AIChatSession } from "@lib/genAiConfig";
import { ResumeComponentType } from "@/app/types";
import { useResumeStore } from "@/app/context/ResumeContext";
import { toast } from "@/app/_components/ui/use-toast";
// import { useRouter } from "next/router";

const prompt =
  "Job Title: {jobTitle}, Depends on job title give me list of summery for 3 experience level, Mid Level and Freasher level in 3-4 lines in array format, With summery and experience_level Field in JSON Format";

interface Props {
  enabledNext: (value: boolean) => void;
}

function Summery({ enabledNext }: Props) {
  const { resumeId, resumeObj, setResumeObj } = useResumeStore();
  const [summery, setSummery] = useState<string>(resumeObj.summary || "");
  const [loading, setLoading] = useState(false);
  // const { resumeId } = useRouter().query as { resumeId: string };
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([]);
  // useEffect(() => {
  //   setResumeObj({
  //     ...resumeObj,
  //     summary: summery,
  //   });
  // }, [summery]);

  useEffect(() => {}, []);

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace(
      "{jobTitle}",
      resumeObj.personDetails.jobTitle
    );
    console.log(PROMPT);
    const result = await AIChatSession.sendMessage(PROMPT);
    console.log(JSON.parse(result.response.text()));

    setAiGenerateSummeryList(JSON.parse(result.response.text()));
    setLoading(false);
  };

  const onSave = (e: any) => {
    e.preventDefault();
    setLoading(true);
    GlobalApi.UpdateResumeDetail(
      resumeObj.resumeId,
      ResumeComponentType.Summary,
      summery
    )
      .then((resp) => {
        console.log(resp);
        enabledNext(true);
        // setResumeObj({
        //   ...resumeObj,
        //   summary: summery,
        // });
        toast({
          title: "Summery Updated",
          description: "Summery has been updated successfully",
          variant: "default",
        });
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              onClick={() => GenerateSummeryFromAI()}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" /> Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5 text-black"
            required
            value={summery ? summery : resumeObj.summary}
            onChange={(e: any) => {
              if (e.target.value.length <= 200) {
                setSummery(e.target.value);
                setResumeObj({
                  ...resumeObj,
                  summary: e.target.value,
                });
              } else {
                toast({
                  title: "Length Exceeding",
                  description: "Summery should be less than 200 characters",
                  variant: "destructive",
                });
              }
            }}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList && (
        <div className="my-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummeryList?.map(
            (
              item: { summary: string; experience_level: number },
              index: number
            ) => (
              <div
                key={index}
                onClick={() => setSummery(item?.summary)}
                className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
              >
                <h2 className="font-bold my-1 text-primary">
                  Level: {item?.experience_level}
                </h2>
                <p>{item?.summary}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Summery;
