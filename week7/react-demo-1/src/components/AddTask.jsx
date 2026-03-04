import { p } from 'framer-motion/client'
import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'


const  AddTask=({addNewTask}) => {
    let {register,handleSubmit,formState:{errors}}=useForm()
    const submithandler=(data)=>{
        addNewTask(data)
    }


  return (

    <div className='border-2 p-5 w-1/3 bg-blue-400' >
        <h3>Add Task</h3>
        <form  onSubmit ={handleSubmit(submithandler)} >
            <input type="text" {...register("title",{required:true})} placeholder='titlename ' className='border-2'/>
            {
                errors.title?.type==='required' && <p className='text-red-500'>Title is required</p>
            }
            <br />
            <button type='submit' className='bg-green-300 px-5 py-1 mt-3'>Add Task</button>

        </form>


    </div>
  )
}

export default AddTask