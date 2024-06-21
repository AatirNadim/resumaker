import axios from "axios";

// const API_KEY=
const axiosClient = axios.create({
  baseURL: process.env.STRAPI_API_BASE_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
});

const CreateNewResume = (data: any) => axiosClient.post("/user-resumes", data);

const GetUserResumes = (userEmail: string) =>
  axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

const UpdateResumeDetail = (id: string, data: any) =>
  axiosClient.put("/user-resumes/" + id, data);

const GetResumeById = (id: string) =>
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
