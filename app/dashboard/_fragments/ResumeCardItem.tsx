import { Loader2Icon, MoreVertical, Notebook } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from 'react-router-dom'
import GlobalApi from "@/app/lib/apiCalls";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ResumeNode } from "@/app/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { toast } from "@/app/_components/ui/use-toast";
interface ResumeCardItemProps {
  resume: ResumeNode;
  refreshData: any;
}

function ResumeCardItem({ resume, refreshData }: ResumeCardItemProps) {
  const router = useRouter();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("resume: ", resume);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.resumeId).then(
      (resp) => {
        console.log(resp);
        toast({
          variant: "default",
          title: "Resume Deleted!",
        });
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  return (
    <div className="hover:shadow-lg transition">
      <Link href={`/dashboard/resume/${resume.resumeId}`}>
        <div
          className="p-14 bg-muted h-[280px] rounded-t-lg border-t-4cursor-pointer"
          style={{
            borderColor: resume?.themeColor,
          }}
        >
          <div
            className="flex 
        items-center justify-center h-[180px] "
          >
            <img src="/cv.png" width={80} height={80} alt="cv_img" />
          </div>
        </div>
      </Link>
      <div
        className="border p-3 flex justify-between rounded-b-lg shadow-lg"
        style={{
          background: resume?.themeColor,
        }}
      >
        <h2 className="text-sm">{resume.resumeName}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                router.push(`/dashboard/resume/${resume.resumeId}`)
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(`/my-resume/${resume.resumeId}/view`)}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(`/my-resume/${resume.resumeId}/view`)}
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCardItem;
