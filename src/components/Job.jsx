import React, { useState, useContext } from 'react'
import { ArrowDropDown, Cancel, CheckBox, CheckBoxOutlineBlank, Edit } from "@material-ui/icons";
import Tasks from './Tasks';
import {JobsContext} from '../App';

const JobTitle = ({title, done, id, onClick}) => {
    const setJobProp = useContext(JobsContext)[1];
    const [isEditing, setIsEditing] = useState(false);
    const [tempTitle, setTempTitle] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex gap-3 p-5 mx-auto mt-5 w-4/6 sm:w-3/6 md:w-2/6 lg:w-1/4 bg-purple-500 hover:bg-purple-800 text-white rounded shadow"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onDoubleClick={() => setIsEditing(true)}>
            <ArrowDropDown onClick={onClick} className="cursor-pointer bg-white hover:bg-gray-100 rounded text-purple-500" /> 
            {
                isEditing
                    ? <form action="" onSubmit={(e) => {
                        setIsEditing(false);
                        console.log(tempTitle);
                        setJobProp(id, "title", tempTitle);
                        e.preventDefault();
                    }}>
                        <input 
                        className="bg-purple-300 appearance-none border-none rounded w-full px-3 text-gray-700 focus:outline-none focus:shadow-outline" 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder={title} 
                        onChange={e => setTempTitle(e.target.value)}/> 
                    </form>
                    : <span className={`${done ? "line-through" : ""} w-full`}>{title}</span> 
            }

            {
                isHovered
                    ? <div className="flex gap-2 h-full">
                        <span className="cursor-pointer hover:text-gray-200" onClick={() => {setJobProp(id, "done", !done);}}>
                          {done ? <CheckBox /> : <CheckBoxOutlineBlank />}
                        </span>
                        {
                            isEditing
                                ? <span className="cursor-pointer" onClick={() => setIsEditing(false)}><Cancel/></span>
                                : <span className="cursor-pointer" onClick={() => setIsEditing(true)}><Edit/></span>
                        }
                    </div>
                    : ""
            }

        </div>
    );
}

const Job = ({job, jobId}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <JobTitle title={job.title} done={job.done} id={jobId} onClick={() => setIsOpen(!isOpen)} />

            {
                isOpen
                    ? <Tasks tasks={job.tasks} jobId={jobId} />
                    : ""
            }

        </div>
    )
}

export default Job
