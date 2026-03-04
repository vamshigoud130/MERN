import { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TaskCount from './TaskCount'

const TaskManager = () => {

  const [tasks,settasks]= useState([])
  const addNewTask=(t)=>{
    settasks([...tasks,t])
    
  }
  return (
    <div className='flex justify-around mt-5 m-5 gap-5'>
    <AddTask  addNewTask={addNewTask} />
    <TaskList tasks={tasks}/>
    <TaskCount tasks={tasks}/>
    </div>
  )
}

export default TaskManager