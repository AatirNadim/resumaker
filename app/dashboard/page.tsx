import AddResume from "./_fragments/AddResume";
import ResumeGridComp from "./resume-grid-comp";

const page = () => {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resumes</h2>
      <p>Start Creating AI resume to land your next role</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
      >
        <AddResume />
        <ResumeGridComp />
      </div>
    </div>
  );
};

export default page;
