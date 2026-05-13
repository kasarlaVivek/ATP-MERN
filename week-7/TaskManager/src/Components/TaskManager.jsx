import React, { useState } from 'react'
import AddTask from './AddTask'
import TasksCount from './TasksCount'
import TasksList from './TasksList'

function TaskManager() {
    let [tasks, setTasks] = useState([]);
    // add new task
    const addNewTask = (taskObj) => {
        setTasks([...tasks,taskObj]);
    }

    return (
        <div>
            <h1 className='text-7xl text-blue-300 mb-10 text-center'>Task manager</h1>
            <div className='flex justify-around'>
                <AddTask addNewTask = {addNewTask} />
                <TasksCount tasks={tasks}/>
                <TasksList tasks={tasks}/>
            </div>
        </div>
    )
}

export default TaskManager