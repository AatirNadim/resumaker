import { Button } from "@/app/_components/Generics/Button";
import { Input } from "@/app/_components/Generics/Input";
// import { resumeObjContext } from '@/context/resumeObjContext'
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import GlobalApi from "@lib/apiCalls";
import { toast } from "sonner";
// import { useRouter } from "next/router";
import { useResumeContext } from "@/app/context/ResumeContext";
import { PersonNode } from "@/app/types";

interface Props {
  enabledNext: (value: boolean) => void;
}

function PersonalDetail({ enabledNext }: Props) {
  // const { resumeId } = useRouter().query as { resumeId: string };
  const { resumeId, resumeObj, setResumeObj } = useResumeContext();

  const [formData, setFormData] = useState<PersonNode>(new PersonNode());
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("---", resumeObj);
  }, []);

  const handleInputChange = (e: any) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeObj({
      ...resumeObj,
      [name]: value,
    });
  };

  const onSave = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeObj.personDetails.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeObj.personDetails.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              defaultValue={resumeObj.personDetails.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={resumeObj.personDetails.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeObj.personDetails.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeObj.personDetails.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
