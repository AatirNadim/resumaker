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

const CreateNewResume = (data: ResumeNode) => axiosClient.post("/create", data);

const GetUserResumes = (userEmail: string) =>
  // axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);
  axiosClient.get("/");

const UpdateResumeDetail = (id: string, data: ResumeNode) =>
  axiosClient.put("/user-resumes/" + id, data);

const GetResumeById = (id: string): Promise<ResumeNode> =>
  axiosClient.get("/user-resumes/" + id + "?populate=*");

const DeleteResumeById = (id: string) =>
  axiosClient.delete("/user-resumes/" + id);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
