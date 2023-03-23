import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='auth'>      
      <div style={{ height: "100vh"}} className="d-flex p-5 justify-content-end align-items-center">
        <div className='w-25'>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout