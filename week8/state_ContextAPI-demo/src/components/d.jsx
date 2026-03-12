import { useTest1 } from "../store/Teststore1";

import React from 'react'

function d() {
    const count=useTest1((state) => (state.count));
    const incrementcount=useTest1(state=>state.incrementcount);
    const decrementcount=useTest1(state=>state.decrementcount);
  return (
    <div className='w-76 h-95  shadow-2xl text-center p-10  mt-2 '>
        <p>count value: {count}</p>
        <button className="bg-blue-500 rounded-2xl mt-2" onClick={incrementcount}>Increment Count</button>
        <button className="bg-red-500 rounded-2xl mt-2" onClick={decrementcount}>Decrement Count</button>


    </div>
  )
}

export default d
