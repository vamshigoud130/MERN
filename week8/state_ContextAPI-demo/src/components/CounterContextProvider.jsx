import React from 'react'
import { useState, useCallback } from 'react'
import {CounterContext} from './contex/CounterContext'

function CounterContextProvider({children}) {

    //state
    const [counter1, setCounter1] = useState(1)
    //function to update state
    const changeCounter1 = useCallback(() => {
        setCounter1(prev => prev + 1)
    }, [])

  return (
    <CounterContext.Provider value={{counter1, changeCounter1}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider