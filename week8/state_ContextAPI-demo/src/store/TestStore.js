import {create } from 'zustand'

//create a store
export const useTest=create((set)=>({
    //state
    x:10,
    //functions to modify state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decrementX:()=>set((state)=>({x:state.x-1})),
    incrementByValue:(value)=>set((state)=>({x:state.x+value}))

})) 