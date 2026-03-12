import { div } from 'framer-motion/client'
import React from 'react'
import { Outlet,NavLink } from 'react-router'

function Technologies() {
  return (
    <div className='text-center mt-5 text-3xl'>
      <h1 className='text-7xl mb-5'> welcome to Technologies</h1>
      <nav>
        
        <ul className='flex justify-around text-2xl bg-[#4c3c3c] text-white rounded-2xl p-2 m-2'>
            <li>
                <NavLink className={({isActive})=> isActive?"text-red-500":""} to="java">Java</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive?"text-red-500":""} to="python">Python</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive?"text-red-500":""} to="cpp">C++</NavLink>
            </li>
        </ul>
        <Outlet />
      </nav>
      
    </div>
  )
}

export default Technologies