import { CheckBox, CheckBoxOutlineBlank, Edit } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import {JobsContext} from '../App';

const TaskTitle = ({title, done, id, jobId}) => {
    const setTaskProp = useContext(JobsContext)[0];
    const [isEditing, setIsEditing] = useState(false);
    const [tempTitle, setTempTitle] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="flex gap-3 p-2 mx-auto w-3/5 sm:w-2/5 md:w-1/5 lg:w-1/5 bg-purple-400 hover:bg-purple-600 text-white shadow-md rounded"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onDoubleClick={() => {
                setIsEditing(true);
            }}>
            
            {
                isEditing
                    ? <form action="" onSubmit={(e) => {
                        setIsEditing(false);
                        console.log(tempTitle);
                        setTaskProp(jobId, id, "title", tempTitle);
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
                        <span className="cursor-pointer hover:text-gray-200" onClick={() => {setTaskProp(jobId, id, "done", !done);}}>
                          {done ? <CheckBox /> : <CheckBoxOutlineBlank />}
                        </span>
                        <span className="cursor-pointer" onClick={() => setIsEditing(!isEditing)}><Edit/></span>
                    </div>
                    : ""
            }
        </div>
    );
}

const Task = ({task, jobId}) => {
    return (
        <TaskTitle title={task.title} done={task.done} id={task.id} jobId={jobId} />
    )
}

export default Task
