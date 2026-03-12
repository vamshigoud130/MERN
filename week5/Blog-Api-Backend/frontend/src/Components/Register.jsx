import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

function Register() {
  const { register, handleSubmit ,formState:{errors} } = useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const Navigate = useNavigate()

  const onSubmit = async (newUser) => {
    console.log(newUser)
    
    
    //make api request 
    try{

      let {role,...userData} = newUser
      if (role==='user'){
        // let res = await fetch("http://localhost:4000/user-api/users",{
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json",
        //   },
        //   body:JSON.stringify(userData),

        //make api request to user
        let resObj = await axios.post("http://localhost:4000/user-api/users",userData,{ withCredentials: true })
        console.log(resObj.data)
        if(resObj.status===201){
          // alert("User Registered Successfully")
          toast.success("User Registered Successfully", { duration: 5000 });
          Navigate('/login') //redirect to login page


        }
      }
      
      else if (role==='author'){
        // let res = await fetch("http://localhost:4000/author-api/users",{
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json",
        //   },
        //   body:JSON.stringify(newUser),
        }
      }
    

      catch(err){
        setError(err)
      }
      finally{
        setLoading(false)
      }
  }

  return (
    <div className=" bg-gray-200 m-20 p-10 rounded">
      <h1 className="text-2xl text-center mb-6 ">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Role selection */}
        <div className="flex items-center justify-center gap-6">
          <p className="text-lg">Select Role</p>
            <input type="radio"  value="user" {...register("role",{required:true})}/> User
            <input  type="radio" value="author" {...register("role",{required:true})}/> Author
          {errors.role && <p className="text-red-500 text-sm text-center">Role is required</p>}
        </div>
        {/* First and Last name */}
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="First name"
            {...register("firstName",{required:true , minLength:4})}
            className="flex-1 p-3 bg-gray-300 rounded"
          />
          {errors?.firstName?.type==="required" && <p className="text-red-500">*firstName  Required</p>}
          {errors?.firstName?.type==="minLength" && <p className="text-red-500">*minLength 4</p>}
          <input
            type="text"
            placeholder="Last name"
          {...register("lastName" ,{required:true , minLength:4})}
            className="flex-1 p-3 bg-gray-300 rounded"
          />
          
          {errors?.lastName?.type==="required" && <p className="text-red-500">*lastName  Required</p>}
          {errors?.lastName?.type==="minLength" && <p className="text-red-500">*minLength 4</p>}
        </div>
        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email",{required:true}
          )}
          className="p-3 bg-gray-300 rounded"
        />
        {errors?.email?.type==="required" && <p className="text-red-500">*email Required</p>}
        {/* Password */}  
        <input
          type="password"
          placeholder="Password"
          {...register("password",{required:true , minLength:4})}
          className="p-3 bg-gray-300 rounded"
        />
          {errors?.password?.type==="required" && <p className="text-red-500">*password Required</p>}
          {errors?.password?.type==="minLength" && <p className="text-red-500">*minLength 4</p>}
        {/* Profile Image */}
        <input
          type="text"
          {...register("profileImageUrl")}
          className="p-3 bg-gray-300 rounded"
        />
        {/* Button */}
        <button
          type="submit"
          className="bg-sky-500 text-white py-2 px-6 rounded w-40 mx-auto vibrate-1">
          Register
        </button>
      </form>
    </div>
)

}

export default Register