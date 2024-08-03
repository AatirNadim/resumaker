import axios from "axios";
import { ResumeComponentType, ResumeNode } from "../types";

const axiosClient = axios.create({
  baseURL: "/api/resume",
  headers: {
    "Content-Type": "application/json",
  },
});

const CreateNewResume = async (
  resumeName: string,
  userEmail: string
): Promise<string> => {
  try {
    const res = await axiosClient.post("/create", { resumeName, userEmail });
    return res.data.resumeId;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const GetUserResumes = async (userEmail: string): Promise<any[]> => {
  try {
    const res = await axiosClient.get(`?userEmail=${userEmail}`);
    console.log("\n\n===== res: ", res, "=====\n\n");
    return res.data.resumes as any[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const UpdateResumeDetail = async (
  resumeId: string,
  type: ResumeComponentType,
  payload: any
) => {
  const res = await axiosClient.post("/update", { resumeId, type, payload });
  console.log("result from resume updation : ", res.data, "\n\n");
  try {
  } catch (err) {
    console.error(err);
  }
};

const GetResumeById = async (id: string): Promise<ResumeNode> => {
  try {
    console.log("fetching resume by id: ", id, "\n\n");
    const res = await axiosClient.get("?resumeId=" + id);
    console.log("\n\n===== res: ", res, "=====\n\n");
    return (res.data.resumes as any[])[0];
  } catch (err) {
    console.error(err);
    // return null;
    throw err;
  }
};

const DeleteResumeById = async (id: string) => {
  try {
    const res = await axiosClient.delete("/delete", { data: { resumeId: id } });
    console.log("\n\n===== res: ", res, "=====\n\n");
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
