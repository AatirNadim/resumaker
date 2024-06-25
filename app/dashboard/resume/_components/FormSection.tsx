import React, { useState } from "react";
import PersonalDetail from "./_forms/PersonalDetails";
import { Button } from "@components/Generics/Button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import Summery from "./_forms/Summary";
import Experience from "./_forms/Experience";
import Education from "./_forms/Education";
import Skills from "./_forms/Skills";
import Link from "next/link";
import ThemeConfig from "./ThemeConfig";
// import { useRouter } from "next/router";
import Navigate from "@components/Generics/Native/Navigate";
import { useResumeContext } from "@/app/context/ResumeContext";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useResumeContext();
  // const { resumeId } = useRouter().query;
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link href={"/dashboard"}>
            <Button>
              <Home />
            </Button>
          </Link>
          <ThemeConfig />
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              {" "}
              <ArrowLeft />{" "}
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            {" "}
            Next
            <ArrowRight />{" "}
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summery enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience />
      ) : activeFormIndex == 4 ? (
        <Education />
      ) : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <Navigate to={"/my-resume/" + resumeId + "/view"} />
      ) : null}
    </div>
  );
}

export default FormSection;
