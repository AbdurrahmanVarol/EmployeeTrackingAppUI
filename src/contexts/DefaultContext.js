import React, { createContext, useEffect, useState } from 'react'

const DefaultContext =  createContext();

export const DefaultContextProvider = ({children}) =>{

    const [token,setToken] = useState()
    const [userRole,setUserRole] = useState(1)

    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);


    const values = {
        token,
        setToken,
        userRole,
        setUserRole
    }

    return (
      <DefaultContext.Provider value={values}>
        {children}
      </DefaultContext.Provider>
    );

}
export default DefaultContext;