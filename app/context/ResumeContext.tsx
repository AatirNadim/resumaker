import { createContext, useContext, useState } from "react";

const ResumeContext = createContext({
  resumeObj: null,
  setResumeObj: (temp: any) => {},
});

export const useResumeContext = useContext(ResumeContext);

const ResumeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [resumeObj, setResumeObj] = useState(null);

  const value = {
    resumeObj,
    setResumeObj: (temp: any) => setResumeObj(temp),
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
