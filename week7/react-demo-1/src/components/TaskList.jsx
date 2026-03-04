
import { div } from 'framer-motion/client'
import React from 'react'

function TaskList({tasks}) {
  
  if(tasks.length===0){

    return (<p className='border-2 p-5 w-1/3 bg-green-200'>No tasks added yet</p>)
  }
  return (
    <div className='border-2 p-5 w-1/3 bg-green-200'>
        <h3>List of Tasks</h3>
        {
          tasks.map((t,index)=>( <p key={index}>{t.title}</p>))
        }
        
       
    </div>
  )
}


export default TaskList