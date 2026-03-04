import { h2 } from "framer-motion/client"
import { useState } from "react"
function Update() {

    const [marks,setmarks]=useState([11,12,13])
    const [show,setshow]=useState(false)
    const [dic,setdic]=useState(false)
    let [user,setuser]=useState({
      name:"vam",
      age:12
    })
   
    const newobj=()=>{
        
       setshow(true)
       

    }
    const update=()=>{
      setmarks([...marks,25])
      
    }
    const upuser=()=>{
      setuser({...user,city:"hyd"})
    }
    
    const newo=()=>{
      setdic(true)
    }
    

  return (
    <div className="text-center bg-emerald-500">
      <h1>button handling</h1>
      <br /><br />
       <button className="bg-blue-500 rb-" onClick={newobj}>displaymarks</button>
       <br/>
       {show && marks.map((m,i)=>
      (
        <h2 key={i}>{m}</h2>
      ))}
      <br />
      <button className="bg-blue-500 rb-" onClick={update}>Update</button>
      
      <br />
      <br />
      
      <button className="bg-blue-500 rb-" onClick={newo}>displayuser</button>
      <br />{
        dic && <p>{JSON.stringify(user)}</p>
      }
      <br />
      <button className="bg-blue-500 rb-" onClick={upuser}>userDetai</button>

    </div>
  )
}

export default Update