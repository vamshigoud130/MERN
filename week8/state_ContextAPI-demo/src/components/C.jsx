import { useContext } from "react"
import { CounterContext } from "./contex/CounterContext"
import {useTest} from '../store/TestStore'



function C() {


  // Accessing Zustand store
  const x = useTest(state => state.x);
  const incrementX = useTest(state => state.incrementX);
  const decrementX = useTest(state => state.decrementX);
  console.log('Zustand store value x:', x);

  console.log('component C rendered')
  let {counter1, changeCounter1} = useContext(CounterContext)
  return (
    <div className='w-76 h-95 transform   shadow-2xl text-center p-10 cursor-pointer'>
      <p className="text-4xl">component C</p>
      <br />
      <p>Zustand X value: {x}</p>
      <br />
      <p>counter value: {counter1}</p>
      <button className=" bg-blue-400 rounded-2xl p-1 mt-2"onClick={changeCounter1}>Increment Counter</button>
      <br />
      <button className=" bg-green-400 rounded-2xl p-1 mt-2"onClick={incrementX}>Increment Zustand X</button>
      <br />
      <button className=" bg-red-400 rounded-2xl p-1 mt-2"onClick={decrementX}>Decrement Zustand X</button>
    </div>
  )
}

export default C