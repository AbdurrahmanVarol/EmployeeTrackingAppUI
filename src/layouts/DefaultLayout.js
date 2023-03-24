import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';
import Navi from '../components/Navi';

function DefaultLayout() {
  return (
    <div className='default'>
      <Navi />
      <div className="container bg-light" style={{minHeight:"100vh"}}>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout