import React, { createContext, useEffect, useState } from 'react'

const DefaultContext =  createContext();

export const DefaultContextProvider = ({children}) =>{
  
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [userRole,setUserRole] = useState(1)
    const [departments,setDepartments] = useState()

    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);


    const values = {
      token,
      setToken,
      userRole,
      setUserRole,
      departments,
      setDepartments,
    };

    
    return (
      <DefaultContext.Provider value={values}>
        {children}
      </DefaultContext.Provider>
    );

}
export default DefaultContext;