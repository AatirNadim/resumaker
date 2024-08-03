"use client";
import { Input } from "@/app/_components/ui/input";
import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Button } from "@/app/_components/ui/button";
import { LoaderCircle } from "lucide-react";
// import { resumeObjContext } from "@/context/resumeObjContext";
import GlobalApi from "@lib/apiCalls";
// import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { ResumeComponentType, SkillNode } from "@/app/types";
import { useResumeStore } from "@/app/context/ResumeContext";

function Skills() {
  const [skillsList, setSkillsList] = useState<SkillNode[]>([]);
  // const router = useRouter();
  // const { resumeId } = router.query as { resumeId: string };

  const [loading, setLoading] = useState(false);
  const { resumeId, resumeObj, setResumeObj } = useResumeStore();

  useEffect(() => {
    resumeObj && setSkillsList(resumeObj?.skills);
  }, []);

  const handleChange = (index: number, name: string, value: string) => {
    const newEntries = skillsList.slice();

    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([...skillsList, new SkillNode()]);
  };
  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);

    GlobalApi.UpdateResumeDetail(
      resumeId,
      ResumeComponentType.Skills,
      skillsList
    ).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated !");
      },
      (error) => {
        setLoading(false);
        toast("Server Error, Try again!");
      }
    );
  };

  useEffect(() => {
    setResumeObj({
      ...resumeObj,
      skills: skillsList,
    });
  }, [skillsList]);
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div className="flex justify-between mb-2 border rounded-lg p-3 ">
            <div>
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                defaultValue={item.skill}
                onChange={(e: any) =>
                  handleChange(index, "name", e.target.value)
                }
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v: any) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            {" "}
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="text-primary"
          >
            {" "}
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
