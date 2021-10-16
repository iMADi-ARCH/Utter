import React from 'react'
import { ArrowDropDown, CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import Tasks from './Tasks';

const JobTitle = ({title, done}) => {
    return (
        <div className="flex cursor-pointer gap-3 p-5 mx-auto mt-5 w-4/6 sm:w-3/6 md:w-2/6 lg:w-1/4 bg-purple-500 hover:bg-purple-800 text-white rounded-full shadow-lg">
            <ArrowDropDown className="bg-white hover:bg-gray-100 rounded-full text-purple-500" /> 
                <span className="flex-grow" >{title}</span> 
            {done ? <CheckBox /> : <CheckBoxOutlineBlank />}
        </div>
    );
}

const Job = ({job, jobId}) => {
    return (
        <div>
            <JobTitle title={job.title} done={job.done} />
            <Tasks tasks={job.tasks} jobId={jobId} />
        </div>
    )
}

export default Job
