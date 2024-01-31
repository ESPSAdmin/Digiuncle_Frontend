import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import { Dotes, LoginHover } from "./Dropdown";
import { Sidebar } from "..";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [hover, sethover] = useState(false)
    const [dotes, setdotes] = useState(false)
    const [slider, setSlider] = useState(false)
    const Mouseenter = () => {
        sethover(true)
    }

    const mouseLeave = () => {
        sethover(false)
    }



    return (
        <>
            <Sidebar slider={slider} />
            <nav className={` bg-white w-full flex  justify-between items-center m-0 sm:mx-auto smp:x-4 sm:py-3 sticky top-0 flex-col sm:flex-row`}>
                <LoginHover hover={hover} sethover={sethover} />
                <Dotes dotes={dotes} setdotes={setdotes} />

                <div className="w-screen ">

                    <div className=" w-full flex items-center justify-between px-4">
                        <span className="text-lg font-bold">
                            <img src="./image/logo.jpeg" className="h-[40px] py-1 sm:h-[50px] " />
                        </span>
                        <span className=" flex text-lg mr-5 md:hidden" onClick={() => setSlider(!slider)} >
                            {slider ?   <MdClose /> :<RxHamburgerMenu />}
                        </span>

                    </div>


                </div>




                <div className=" w-full  flex justify-between items-center py-1 bg-gray-50 sm:bg-white">
                    <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">

                    </div>
                    <div className="inline-flex items-center max-w-full ">
                        <div className=" items-center flex-grow-0 flex-shrink pl-2 relative hidden  md:w-[300px] lg:w-[500px] md:flex px-6  bg-gray-50 rounded-full    py-1" type="button">
                            <input className="block  flex-grow flex-shrink overflow-hidden focus:outline-0 ps-4 bg-gray-50" placeholder="Search products...." />
                            <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                                <CiSearch size={25} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex mr-0 lg:mr-4 items-center md:hidden"  >
                        <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap text-lg font-bold">
                                <IoIosSearch size={20} />
                            </div>
                        </a>

                    </div>

                    
                    <div className="flex mr-4 items-center">
                        <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap text-lg font-bold">
                                <IoCartOutline /> <span className="ml-2 hidden lg:inline-block">Cart</span>
                            </div>
                        </a>

                    </div>
                    <div className="flex mr-0 lg:mr-4 items-center" onMouseEnter={Mouseenter} onMouseLeave={mouseLeave} >
                        <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap text-lg font-bold">
                                <FaRegUserCircle /> <span className="ml-2 hidden md:flex">Login</span> <BiChevronDown className={`${hover ? "" : "rotate-[-180deg]"} transition-all duration-200 `} />
                            </div>
                        </a>

                    </div>
                    <div className="flex mr-4 items-center" onMouseEnter={() => setdotes(true)} onMouseLeave={() => setdotes(false)}>
                        <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap text-lg font-bold">
                                <BiDotsVerticalRounded />
                            </div>
                        </a>

                    </div>
                    


                </div>

            </nav>
            <hr />
        </>
    )
}

export default Navbar