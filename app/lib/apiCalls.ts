// "use server";

import axios from "axios";
import { ResumeNode } from "../types";

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
  const res = await axiosClient.get(`?userEmail=${userEmail}`);
  console.log("\n\n===== res: ", res, "=====\n\n");
  return res.data;
};

const UpdateResumeDetail = async (id: string, data: ResumeNode) => {
  // axiosClient.put("/user-resumes/" + id, data);
};

const GetResumeById = async (id: string) => {
  // axiosClient.get("/user-resumes/" + id + "?populate=*");
  console.log("id from the server: ", id)

  return null;
};

const DeleteResumeById = async (id: string) => {
  // axiosClient.delete("/user-resumes/" + id);
};

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
