import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import {  SearchBar, Sidebar } from "..";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { useAuthContext, useCartContext } from "../../context";

const Navbar = () => {
    const {Cart} = useCartContext()
    const location = useLocation()
    const [slider, setSlider] = useState(false)
    const navigate = useNavigate();

    const { token, logoutHandler } = useAuthContext()

    return (
        <>
            <Sidebar slider={slider} setSlider={setSlider} token={token} logoutHandler={logoutHandler} />

            <nav className=" w-screen sm:flex flex-col  sm:flex-row  md:px-4 items-center justify-center sm:justify-between py-2  bg-white z-40 sticky top-0 ">
                <div className="flex justify-between mx-4 items-center ">
                    <Link to="/"  >
                        <img src="./image/logo.jpeg" className="h-10" alt="Logo" />
                    </Link>
                    <RxHamburgerMenu size={25} className="sm:hidden" onClick={() => setSlider(true)} />
                </div>
                <div>
                    <ul className="flex items-center gap-8 justify-evenly lg py-2">
                        <li className="hidden md:flex">
                           <SearchBar  />

                        </li>
                        <li className="  md:hidden">
                            <Link className=" flex flex-col items-center " >
                                <IoIosSearch size={25} />
                            </Link>
                        </li>
                        <li onClick={() => navigate('/Cart')}>
                            <Link className=" flex gap-0 flex-col items-center relative" >
                                <IoCartOutline className="m-0 p-0 text-3xl" />
                                <span className=" hidden md:flex p-0 m-0">Cart
                                    {
                                        Cart?.length > 0 ? <span className="bg-red-500  text-white font-bold px-[6px]  rounded-full text-sm absolute top-[-17%] right-[-8px]">{Cart.length}</span> : ""
                                    }
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-col items-center relative "  >
                                <FaRegHeart className="text-3xl p-0 m-0" />
                                <span className="hidden md:flex">Wishlist</span>

                            </Link>
                        </li>
                        <li className="hidden sm:flex" onClick={() => setSlider(!slider)}>
                            <Link> <BiDotsVerticalRounded size={30} /></Link>
                        </li>
                    </ul>
                </div>
                

            </nav>
            <hr />

            {location.pathname == "/login" || location.pathname == "/signup" || location.pathname == "/Cart" ||location.pathname ==  "/product/:id" || location.pathname == "/productlist" || location.pathname == "/profile" ? null
                : (<div className='py-2 w-screen hidden  md:flex  z-0 ' >
                    <nav className='h-full w-full mx-5 '>
                        <ul className='h-full flex items-center justify-evenly font-bold font-roboto text-gray-600'>
                            <li>Best Selling </li>
                            <li>Top offers </li>
                            <li>Recently Addied </li>
                            <li>Top Categories </li>
                            <li>Best Combo</li>
                        </ul>
                    </nav>
                </div>)}
        </>
    )
}

export default Navbar