import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const SignUp = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [data, setdata] = useState({
        fname: "",
        lname: '',
        email: '',
        mobile: "",
        password: '',
        confirm_password: ""
    })


    return (
        <>
            <div className="h-[84vh] sm:h-[85vh] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: " url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')" }}>
                <div className="flex justify-end">
                    <div className="bg-white h-[84vh] sm:h-[85vh] w-full sm:w-3/4 md:w-2/3 lg:1/2 flex justify-center items-center">
                        <div>
                            <div>
                                <h1 className="text-2xl font-bold pb-2 ">SignUp Here</h1>
                            </div>
                            <form  >

                                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                                    <div className="">
                                        <label className="block text-md mb-2" htmlFor="fname">First Name</label>
                                        <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="fname" placeholder="First Name" required />
                                    </div>
                                    <div className="">
                                        <label className="block text-md mb-2" htmlFor="lname">Last Name</label>
                                        <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="lname" placeholder="Last Name" required />
                                    </div>
                                    <div className="">
                                        <label className="block text-md mb-2" htmlFor="email">Email</label>
                                        <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="E-mail" required />
                                    </div>
                                    <div className="">
                                        <label className="block text-md mb-2" htmlFor="Mobile No.">Mobile No.</label>
                                        <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="mobile" placeholder="Mobile No." required />
                                    </div>
                                    <div className=" relative">
                                        <label className="block text-md mb-2" htmlFor="password">Password</label>
                                        <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type={show ? "text" : "password"} name="password" placeholder="password" required />
                                        {show ? <IoEyeOffOutline className='absolute top-[60%] right-2' onClick={() => setShow(false)} />
                                            :
                                            <IoEyeOutline className='absolute top-[60%] right-2' onClick={() => setShow(true)} />}
                                    </div>
                                    <div className=" relative">
                                        <label className="block text-md mb-2" htmlFor="confirm_password">Confirm Password</label>
                                        <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type={show ? "text" : "password"} name="confirm_password" placeholder="Confirm Password" required />

                                    </div>
                                </div>


                                <div className="">
                                    <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100" type='submit' >Sign Up</button>
                                    {/* <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">

                                        <img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                                        <button >Or sign-in with google</button>
                                    </div> */}
                                </div>
                            </form>
                            <p className="mt-8"> Dont have an account? <span className="cursor-pointer text-sm text-blue-600" onClick={() => navigate("/Login")}> Sign In</span></p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default SignUp