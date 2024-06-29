import { Button } from "@/app/_components/Generics/Button";
import { Input } from "@/app/_components/Generics/Input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../Editor";
// import { resumeObjContext } from "@/context/resumeObjContext";
// import { useParams } from "react-router-dom";
import GlobalApi from "@lib/apiCalls";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useResumeContext } from "@/app/context/ResumeContext";
// import { useRouter } from "next/router";
import { ExperienceNode, ResumeComponentType } from "@/app/types";
import { DatePicker } from "@/app/_components/Generics/DatePicker";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};

function Experience() {
  const [experienceList, setexperienceList] = useState<ExperienceNode[]>([
    new ExperienceNode(),
  ]);
  const { resumeId, resumeObj, setResumeObj } = useResumeContext();
  // const { resumeId } = useRouter().query as { resumeId: string };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("experienceList", experienceList);
  }, [experienceList]);

  useEffect(() => {
    resumeObj?.experience.length > 0 &&
      setexperienceList(resumeObj?.experience as ExperienceNode[]);
  }, []);

  const handleChange = (index: number, event: any) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    console.log(newEntries);
    setexperienceList(newEntries);
  };

  const AddNewExperience = () => {
    setexperienceList([...experienceList, new ExperienceNode()]);
  };

  const RemoveExperience = () => {
    setexperienceList((experienceList) => experienceList.slice(0, -1));
  };

  const handleRichTextEditor = (e: any, name: string, index: number) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;

    setexperienceList(newEntries);
  };

  useEffect(() => {
    setResumeObj({
      ...resumeObj,
      experience: experienceList,
    });
  }, [experienceList]);

  const onSave = () => {
    setLoading(true);
    // const data = {
    //   data: {
    //     Experience: experienceList.map(({ id, ...rest }) => rest),
    //   },
    // };

    console.log(experienceList);

    // GlobalApi.UpdateResumeDetail(
    //   resumeObj.resumeId,
    //   ResumeComponentType.Experience,
    //   experienceList
    // ).then(
    //   (res) => {
    //     console.log(res);
    //     setLoading(false);
    //     toast("Details updated !");
    //   },
    //   (error) => {
    //     setLoading(false);
    //   }
    // );
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.title}
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.companyName}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.city}
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.state}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  {/* <Input
                    type="date"
                    name="startDate"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.startDate}
                  /> */}
                  <DatePicker
                    name="startDate"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.startDate}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event: any) => handleChange(index, event)}
                    defaultValue={item?.endDate}
                  />
                </div>
                <div className="col-span-2">
                  {/* Work Summery  */}
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.workSummery}
                    onRichTextEditorChange={(event: any) =>
                      handleRichTextEditor(event, "workSummery", index)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={AddNewExperience}
              className="text-primary"
            >
              {" "}
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              onClick={RemoveExperience}
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
    </div>
  );
}

export default Experience;
