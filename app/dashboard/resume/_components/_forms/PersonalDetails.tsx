"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
// import { resumeObjContext } from '@/context/resumeObjContext'
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "@lib/apiCalls";
import { toast } from "sonner";
// import { useRouter } from "next/router";
import { PersonNode, ResumeComponentType } from "@/app/types";
import { useResumeStore } from "@/app/context/ResumeContext";

interface Props {
  enabledNext: (value: boolean) => void;
}

function PersonalDetail({ enabledNext }: Props) {
  const { resumeObj, setResumeObj } = useResumeStore();

  const [formData, setFormData] = useState<PersonNode>(new PersonNode());
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // setResumeObj({
    //   ...resumeObj,
    //   [name]: value,
    // });
    setResumeObj({
      ...resumeObj,
      personDetails: { ...resumeObj.personDetails, [name]: value },
    });
    console.log(name, value);
  };

  const onSave = (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log("resumeObj: ", resumeObj);
    // return;
    GlobalApi.UpdateResumeDetail(
      resumeObj.resumeId,
      ResumeComponentType.PersonDetails,
      formData
    )
      .then((resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
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
              type="tel"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeObj.personDetails.email}
              onChange={handleInputChange}
              type="email"
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
