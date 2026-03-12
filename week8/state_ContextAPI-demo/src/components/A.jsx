import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './contex/CounterContext'
import { UserContext } from './contex/UserContext'
import {useTest} from '../store/TestStore'


function A() {
  let  x = useTest(state => state.x);
  let incrementX = useTest((state)=>state.incrementX);
  
  console.log('component A rendered')
   let {counter1, changeCounter1} = useContext(CounterContext)
   let {user, updateUser} = useContext(UserContext)
   
  return (
    <div className='w-76 h-95  shadow-2xl text-center p-10  '> 
    <p className="text-4xl">component A</p>
    <br />

    <p>counter value: {counter1}</p>
    <br />
    <p>Zustand X value: {x}</p>
    <button className=" bg-blue-400 rounded-2xl p-1 mt-2"onClick={changeCounter1}>Increment Counter</button>
    <br />
    <button className=" bg-green-400 rounded-2xl p-1 mt-2"onClick={incrementX}>Increment Zustand X</button>
    <br />
    <p>User: {user.name}, Age: {user.age}, Email: {user.email},City :{user.city}</p>
    <button className=" bg-green-400 rounded-2xl p-1 mt-2"onClick={updateUser}>Update User</button>
    
    </div>
  )
}

export default A