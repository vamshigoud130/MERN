import { useContext , useEffect, useRef } from "react"
import { CounterContext } from "./contex/CounterContext"
import {useTest} from '../store/TestStore'


function B() {


  console.log('component B rendered')
    let {counter1, changeCounter1} = useContext(CounterContext)
    let incrementByValue = useTest((state)=>state.incrementByValue)

    let inputRef=useRef(null)
    useEffect(()=>{
      inputRef.current.focus();
    },[])
    
  return (
    <div className='w-76 h-65  shadow-2xl text-center p-10 '>
    <p className="text-4xl">component B</p>
    <br />
    <input  type="text" ref={inputRef} />
    <p>counter value: {counter1}</p>
   
    <button className=" bg-blue-400 rounded-2xl p-1 mt-2"onClick={changeCounter1}>Increment Counter</button>
    <br />
    <button className="bg-green-400 rounded-2xl p-1 mt-2" onClick={() => incrementByValue(50)}>incrementByValue</button>
    </div>

  )
}

export default B