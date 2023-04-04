import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import Navi from '../components/Navi';
import DefaultContext from '../contexts/DefaultContext';

function DefaultLayout() {

  const {token} = useContext(DefaultContext)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate("/login")
    }
  },[])

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