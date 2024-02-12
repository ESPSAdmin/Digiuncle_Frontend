import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from '../context';
const RequiresAuth = () => {
    const location = useLocation();
    const {token} = useAuthContext()
    const Token = localStorage.getItem("token")
  return Token ? (
    <Outlet /> 
    ) :(
      <>
    <Navigate to="/login" state={{from : location}} /> 
      </>
  )
}

export default RequiresAuth