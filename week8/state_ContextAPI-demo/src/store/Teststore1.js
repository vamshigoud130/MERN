import {create } from 'zustand'

//create store
export const useTest1 =create((set)=>({

    //state
    count:0,
    //functions to modify state
    incrementcount:()=>set((state)=>({count:state.count+1})),
    decrementcount:()=>set((state)=>({count:state.count-1})),


}))