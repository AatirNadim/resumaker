// "use server";

import axios from "axios";
import { ResumeComponentType, ResumeNode } from "../types";

// const API_KEY=
const axiosClient = axios.create({
  baseURL: "/api/resume",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
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
    return res.data;
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
  try {
  } catch (err) {
    console.error(err);
  }
};

const GetResumeById = async (id: string) => {
  // axiosClient.get("/user-resumes/" + id + "?populate=*");
  try {
    const res = await axiosClient.get("?resumeId=" + id);
    console.log("\n\n===== res: ", res, "=====\n\n");
    return (res.data as any[])[0];
  } catch (err) {
    console.error(err);
    return null;
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
