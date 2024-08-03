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

// "use client";

// import { createContext, useContext, useState } from "react";
// import { ResumeNode } from "../types";

// const ResumeContext = createContext({
//   resumeObj: {} as ResumeNode,
//   setResumeObj: (temp: ResumeNode) => {},
//   resumeId: "",
//   setResumeId: (temp: string) => {},
// });

// export const useResumeContext = () => useContext(ResumeContext);

// const ResumeContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [resumeObj, setResumeObj] = useState<ResumeNode>(new ResumeNode());
//   const [resumeId, setResumeId] = useState<string>("");

//   const value = {
//     resumeObj,
//     setResumeObj: (temp: ResumeNode) => setResumeObj(temp),
//     resumeId,
//     setResumeId: (temp: string) => setResumeId(temp),
//   };

//   return (
//     <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
//   );
// };

// export default ResumeContextProvider;
