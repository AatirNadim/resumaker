import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ResumeNode } from "../types";

export type State = {
  resumeObj: ResumeNode;
  resumeId: string;
};

export type Actions = {
  setResumeObj: (temp: ResumeNode) => void;
  setResumeId: (temp: string) => void;
};

export const useResumeStore = create<State & Actions>()(
  persist(
    (set) => ({
      resumeObj: new ResumeNode(),
      resumeId: "",
      setResumeObj: (temp: ResumeNode) => set({ resumeObj: temp }),
      setResumeId: (temp: string) => set({ resumeId: temp }),
    }),
    { name: "resumeInfo", skipHydration: true }
  )
);
