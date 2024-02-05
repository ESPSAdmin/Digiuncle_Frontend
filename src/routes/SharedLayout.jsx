import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components/index'
const SharedLayout = () => {
  return (
    <>
        <div className="">  
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default SharedLayout