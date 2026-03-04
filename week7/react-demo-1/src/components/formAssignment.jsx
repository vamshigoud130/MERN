

import { useForm } from "react-hook-form";


function Add()
{

    const {register,handleSubmit}=useForm()
    const submit=(obj)=>{
        console.log(obj)
    }

    return(

        <div className="text-5xl bg-blue-400 m-20 ">
            <h1 className="text-center">Form</h1>
            <br />

            <form onSubmit={handleSubmit(submit)} className="text-center">
 
                <div className="bg-pink-400 m-10">
                    <br />
                    <h1>USER REGISTRATION FORM</h1>
                    <br />
                
                <input type="text" className="border-2 text-center  bg-amber-100 " {...register("Firstname")} name="Name" placeholder="FirstName"/>
                <br />
                <input type="text"className="border-2 text-center mt-2  bg-amber-100" {...register("Lastname")} name="name" placeholder="LastName" /> 
                <br />
                <input type="email"  autoComplete='off' className="border-2 text-center mt-2 mb-5 bg-amber-100"{...register("email")  } name="mail" placeholder="Email"/>
                <br />
                <input type="password" className="border-2 text-center mt-2 mb-5 bg-amber-100"{...register("password")} name="password" placeholder="password" />
                <br />
                <input type="date" className="border-2 text-center mt-2 mb-5 bg-amber-100" {...register("dateofbirth")} name="dateofbirth" placeholder="doc" />
                <br />
                <button type="submit" className="bg-blue-700 p-2 mt-2" >Login</button>
                </div>


            </form>
        </div>
    )
}
export default Add;