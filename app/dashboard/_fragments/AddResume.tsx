"use client";

import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "@/app/lib/apiCalls";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useResumeStore } from "@/app/context/ResumeContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState<string>("");
  const { user } = useUser();
  const { setResumeId } = useResumeStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onCreate = async () => {
    setLoading(true);

    if (!user?.primaryEmailAddress?.emailAddress) {
      alert("User email not found");
      console.error("User email not found");
      return;
    }

    GlobalApi.CreateNewResume(
      resumeTitle,
      user.primaryEmailAddress.emailAddress
    )
      .then((resumeId) => {
        console.log("resumeId: ", resumeId);
        if (resumeId?.length > 0) {
          setLoading(false);
          setResumeId(resumeId);
          router.push("/dashboard/resume/" + resumeId);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <div
        className="p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className="my-2 text-black"
                placeholder="Ex.Full Stack resume"
                onChange={(e: any) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
