import { useForm } from "react-hook-form";
import { useState } from "react";

function Test1() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]);
  };

  return (
    <div className="text-center mt-10">

      <form className="bg-cyan-300" onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text" className="bg-emerald-400 mt-2"
          {...register("uname", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters required"
            }
          })}
          placeholder="uname"
        />
        <p className="text-red-600">{errors.uname?.message}</p>

        <br />

        <input
          type="password" className="bg-emerald-400"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 7,
              message: "Minimum 7 characters required"
            }
          })}
          placeholder="password"
        />
        <p className="text-red-600">{errors.password?.message}</p>

        <br />

        <input
          type="number" className="bg-emerald-400"
          {...register("age",{required: "Age is required",min:{value: 18,message: "Minimum age is 18"}})}
          placeholder="age"
        />
        <p className="text-red-600">{errors.age?.message}</p>

        <br />

        <input
          type="email" className="bg-emerald-400"
          {...register("email")}
          placeholder="email"
        />

        <br />
        <br />

        <input className="bg-emerald-400"
          type="date"
          {...register("dob")}
          placeholder="dob"
        />

        <br />
        <br />

        <button type="submit" className="bg-emerald-400 px-4 py-2 rounded-md">login</button>
      </form>

      <br /><br />

      <table className="border border-black mx-auto">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Username</th>
            <th className="border border-black px-4 py-2">Password</th>
            <th className="border border-black px-4 py-2">Age</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">DOB</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                
                <td className="border border-black px-4 py-2">{user.uname}</td>
                <td className="border border-black px-4 py-2">{user.password}</td>
                <td className="border border-black px-4 py-2">{user.age}</td>
                <td className="border border-black px-4 py-2">{user.email}</td>
                <td className="border border-black px-4 py-2">{user.dob}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default Test1;