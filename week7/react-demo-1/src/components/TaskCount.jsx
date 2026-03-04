import React from 'react'

function TaskCount( {tasks}) {
    
  return (
    <div className='border-2 p-5 w-1/3 bg-amber-200'>
        <h3>tasks count</h3>
        <p>{tasks.length}</p>
    </div>
  )
}

export default TaskCount