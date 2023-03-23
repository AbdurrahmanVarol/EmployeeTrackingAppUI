import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
      <h1>AuthLayout</h1>
      <hr></hr>
      <div style={{ height: "100vh"}} className="d-flex justify-content-center align-items-center">
        <div className='w-25'>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout