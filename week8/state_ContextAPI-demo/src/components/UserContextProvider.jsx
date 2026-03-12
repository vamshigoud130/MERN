import { useState, useCallback } from "react";
import { UserContext } from "./contex/UserContext";



function UserContextProvider({children}) {
    const [user, setuser] =useState({
        name:"Dimpu",
        age: 22,
        email: "dimpu@example.com"
    })
    const updateUser= useCallback(()=>{
        setuser(prev => ({
            ...prev,
            city:"hyderabad"
        }))
    }, [])
    
  return (
    <UserContext.Provider value={{user, updateUser}}>
        {children}
    </UserContext.Provider>
    
  )
}

export default UserContextProvider