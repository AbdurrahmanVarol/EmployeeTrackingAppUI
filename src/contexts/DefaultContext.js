import React, { createContext, useEffect, useState } from 'react'

const DefaultContext =  createContext();

export const DefaultContextProvider = ({children}) =>{

    const [token,setToken] = useState()

    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);


    const values = {

    }

    return (
      <DefaultContext.Provider value={values}>
        {children}
      </DefaultContext.Provider>
    );

}
export default DefaultContext;