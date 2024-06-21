import { createContext, useContext, useState } from "react";
import { ResumeNode } from "../types";

const ResumeContext = createContext({
  resumeObj: {} as ResumeNode,
  setResumeObj: (temp: ResumeNode) => {},
});

export const useResumeContext = () => useContext(ResumeContext);

const ResumeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [resumeObj, setResumeObj] = useState<ResumeNode>(new ResumeNode());

  const value = {
    resumeObj,
    setResumeObj: (temp: ResumeNode) => setResumeObj(temp),
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
