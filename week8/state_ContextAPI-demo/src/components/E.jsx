import React from 'react'
import { useTest1 } from '../store/Teststore1'
function E() {

    const count=useTest1((state)=>(state.count))
    const incrementcount=useTest1(state=>state.incrementcount)
  return (
    <div className='w-76 h-95  shadow-2xl text-center p-10  mt-2 '>
      <p>count value: {count}</p>
      <button className="bg-blue-500 rounded-2xl mt-2" onClick={incrementcount}>Increment Count</button>
    </div>
  )
}

export default E