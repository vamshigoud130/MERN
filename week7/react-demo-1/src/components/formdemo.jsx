
import { useForm } from "react-hook-form";

function formDemo(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submit=(obj)=>{
        console.log(obj)

    }

    return(

        <div className="text-center m-50 border-2 p-20">
        <h1 className="text-5xl">Form</h1>
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" {...register("username")} name="Name" placeholder="username"  className="bg-amber-200  mt-2 border-2"  />
            {
                errors.username?.type==='required' && <p className="text-rose-700">userName Required</p>
            }
            <br />
            <input type="password" {...register("password")}name="password" placeholder="Password" className="mt-2 border-2" />
            <br />
            <button type="submit" className="bg-blue-700 p-2 mt-2" >login</button>

        </form>

        </div>
    )
}

export default formDemo;