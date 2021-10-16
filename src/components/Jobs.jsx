import React from "react";
import Job from "./Job";

const Jobs = ({jobs}) => {
  return <div>
    {jobs.map((job) => {
      return <Job job={job} key={job.id} jobId={job.id} />
    })}
  </div>;
};

export default Jobs;
