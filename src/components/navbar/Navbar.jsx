import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo, Sidebar } from "..";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
    const [slider, setSlider] = useState(false)



    // if (slider) {
    //   setSlider(false);
    // }



    return (
        <>
            <Sidebar slider={slider} />

            <nav className=" w-screen sm:flex flex-col  sm:flex-row  md:px-4 items-center justify-center sm:justify-between py-2  ">
                <div className="flex justify-between mx-4 items-center">
                    <Logo claseName={"h-[40px]"} />
                    {slider ? <MdClose size={25} className=" sm:hidden" onClick={() => setSlider(false)} /> : <RxHamburgerMenu size={25} className="sm:hidden" onClick={() => setSlider(true)} />}
                </div>
                <div>
                    <ul className="flex items-center gap-8 justify-evenly lg py-2">
                        <li className="hidden md:flex">
                            <Link className="flex items-center relative">
                                <input type="text" placeholder="Search product" className="     md:w-[250px] lg:w-[400px]  px-6 h-11 bg-gray-100 rounded-full focus:outline-none  py-1" />
                                <IoIosSearch size={20} className="absolute right-3" />
                            </Link>

                        </li>
                        <li className="  md:hidden">
                            <Link className=" flex flex-col items-center " >
                                <IoIosSearch size={25} />
                            </Link>
                        </li>
                        <li>
                            <Link className=" flex flex-col items-center " >
                                <IoCartOutline size={25} />
                                <span className=" hidden md:flex">Cart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-col items-center relative "  >
                                <FaRegHeart size={25} />
                                <span className="hidden md:flex">Wishlist</span>
                                
                            </Link>
                        </li>
                        <li className="hidden sm:flex" onClick={() => setSlider(!slider)}>
                            <Link>{slider ? <MdClose size={25} /> : <BiDotsVerticalRounded size={30} />}</Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <hr />

            <div className='h-14 w-screen hidden  md:flex  z-0 ' >
                <nav className='h-full w-full mx-5 '>
                    <ul className='h-full flex items-center justify-evenly'>
                        <li>Best Selling </li>
                        <li>Top offers </li>
                        <li>Recently Addied </li>
                        <li>Top Categories </li>
                        <li>Best Combo</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar