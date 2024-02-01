import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/index'
const SharedLayout = () => {
  return (
    <>
        <div className="">  
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default SharedLayout