import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../stores/AuthStore'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const login = useAuth((state) => state.login)
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const currentUser = useAuth((state) => state.currentUser)

  const onSubmit = async (loginCred) => {
    console.log("Login Cred is ", loginCred)
    await login(loginCred)
  }

  // ✅ Navigation logic
  useEffect(() => {
    if (isAuthenticated && currentUser) {

      if (currentUser.role === "USER") {
        navigate('/userdashboard')
      }

      else if (currentUser.role === "AUTHOR") {
        navigate('/authordashboard')
      }

      else if (currentUser.role === "ADMIN") {
        navigate('/admindashboard')
      }

    }
  }, [isAuthenticated, currentUser, navigate])

  return (
    <div className="bg-gray-200 p-10 rounded m-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        <div className="flex justify-center gap-6 items-center">
          <p className="text-lg">Select Role</p>

          <input type="radio" value="USER"
            {...register("role", { required: true })}/> User

          <input type="radio" value="AUTHOR"
            {...register("role", { required: true })}/> Author
        </div>

        {errors?.role && <p className="text-red-500 text-sm text-center">role is required</p>}

        <input type="email" placeholder="Email" className="p-3 bg-gray-300 rounded"
          {...register("email", { required: true })} />

        {errors?.email && <p className="text-red-500 text-sm">email is required</p>}

        <input type="password" placeholder="Password" className="p-3 bg-gray-300 rounded"
          {...register("password", { required: true, minLength: 4 })} />

        {errors?.password && <p className="text-red-500 text-sm">password is required</p>}

        <button type="submit"
          className="bg-sky-500 text-white py-2 rounded w-36 mx-auto">
          Login
        </button>

      </form>
    </div>
  )
}

export default Login