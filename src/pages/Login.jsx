import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useAuthContext } from '../context';
import axios from 'axios';
import { user } from '../database/db';

const Login = () => {
    const { loginHandler, token, loggingIn } = useAuthContext();
    const Token = localStorage.getItem("token")
    const navigate = useNavigate()
    const location = useLocation();
    const [show, setShow] = useState(false)
    const [data, setdata] = useState([])
    const [loginCredential, setLoginCredentials] = useState({
        email: "",
        password: "",
    });


    // const getdata = () => {
    //     const data = axios.get("http://localhost:3002/user").then((res) => {
    //         setdata(res.data)
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }
    const handleSubmit = async (e) => {
        const fliterdata = user.filter((item) => item.username === loginCredential.email)
        if (fliterdata.length > 0) {
            toast.success("login Successful")
            localStorage.setItem("token", "token")
            // navigate("/")
            let id;
                id = setTimeout(() => {
                    navigate(location?.state?.from?.pathname ?? "/")
                }, 1000)            
        }
        else {
            toast.error("bad credentials")
        }
        // e.preventDefault();  
        // loginHandler(loginCredential);
    };

    useEffect(() => {
        // getdata()
        let id;
        // if(Token){
        //     id = setTimeout(() => {
        //         navigate(location?.state?.from?.pathname ?? "/")
        //     }, 1000)
        // }
        // return () => {
        //     clearInterval(id);
        // }
        
    }, [token])

    return (
        <>

            <div className="h-[84vh] sm:h-[85vh] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: " url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')" }}>
                <div className="flex justify-end">
                    <div className="bg-white h-[84vh] sm:h-[85vh] w-full sm:w-1/2 flex justify-center items-center">
                        <div>

                            <form  >
                                <div>
                                    <h1 className="text-2xl font-bold">Login Here</h1>
                                </div>
                                <div className="my-3">
                                    <label className="block text-md mb-2" htmlFor="email">Email</label>
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email" onChange={(e) => setLoginCredentials({ ...loginCredential, email: e.target.value })} required />
                                </div>
                                <div className="mt-5 relative">
                                    <label className="block text-md mb-2" htmlFor="password">Password</label>
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type={show ? "text" : "password"} name="password" placeholder="password" onChange={(e) => setLoginCredentials({ ...loginCredential, password: e.target.value })} required />
                                    {show ? <IoEyeOffOutline className='absolute top-[60%] right-2' onClick={() => setShow(false)} />
                                        :
                                        <IoEyeOutline className='absolute top-[60%] right-2' onClick={() => setShow(true)} />}
                                </div>

                                <div className="flex justify-between">

                                    <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
                                </div>
                                <div className="">
                                    <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md flex items-center justify-center gap-3" type='button' onClick={handleSubmit}  >{loggingIn ? <img src='./loader/loader.gif' /> : null} Login  </button>
                                    {/* <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">

                                        <img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                                        <button >Or sign-in with google</button>
                                    </div> */}
                                </div>
                            </form>
                            <p className="mt-8"> Dont have an account? <span className="cursor-pointer text-sm text-blue-600" onClick={() => navigate("/signup")}> Sign up </span></p>
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}

export default Login