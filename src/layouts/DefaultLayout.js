import React from 'react'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <div>
      <h1>DefaultLayout</h1>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}

export default DefaultLayout