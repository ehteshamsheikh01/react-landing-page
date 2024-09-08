import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './src/Components/Navbar';
import About from './src/Pages/About';

const Layout = () => {
  return (
    <div>
      <Navbar/>
    
      <Outlet/>
    </div>
  )
}

export default Layout
