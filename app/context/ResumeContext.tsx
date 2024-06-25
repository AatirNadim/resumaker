import { createContext, useContext, useState } from "react";
import { ResumeNode } from "../types";

const ResumeContext = createContext({
  resumeObj: {} as ResumeNode,
  setResumeObj: (temp: ResumeNode) => {},
  resumeId: "",
  setResumeId: (temp: string) => {},
});

export const useResumeContext = () => useContext(ResumeContext);

const ResumeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [resumeObj, setResumeObj] = useState<ResumeNode>(new ResumeNode());
  const [resumeId, setResumeId] = useState<string>("");

  const value = {
    resumeObj,
    setResumeObj: (temp: ResumeNode) => setResumeObj(temp),
    resumeId,
    setResumeId: (temp: string) => setResumeId(temp),
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
