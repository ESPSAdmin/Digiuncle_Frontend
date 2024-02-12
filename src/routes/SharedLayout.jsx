import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components/index'
import MainLoader from '../pages/MainLoader'
const SharedLayout = () => {
  return (
    <>
    {/* <MainLoader/> */}
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