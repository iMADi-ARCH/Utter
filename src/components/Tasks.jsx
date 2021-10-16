import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, jobId }) => {
    return (
        <div>
            {tasks.map((task) => {
                return <Task task={task} key={task.id} jobId={jobId} />
            })}
        </div>
    )
}

export default Tasks
