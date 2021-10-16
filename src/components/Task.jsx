import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';
import React, {useContext} from 'react';
import {JobsContext} from '../App';

const TaskTitle = ({title, done, id, jobId}) => {
    const setTaskDone = useContext(JobsContext);

    return (
        <div className="flex cursor-pointer gap-3 p-2 mx-auto w-3/5 sm:w-2/5 md:w-1/5 lg:w-1/5 bg-purple-400 hover:bg-purple-600 text-white shadow-md rounded">
            <span className="flex-grow" >{done.toString()} {title}</span> 
            <span onClick={() => {
                console.log(done);
                setTaskDone(jobId, id, false);
            }} >
                {done ? <CheckBox /> : <CheckBoxOutlineBlank />}
            </span>
        </div>
    );
}

const Task = ({task, jobId}) => {
    return (
        <TaskTitle title={task.title} done={task.done} id={task.id} jobId={jobId} />
    )
}

export default Task
