import React, { useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";


const sidebar = ({ slider }) => {

    return (
        <>
            <div id='slide' className={`fixed mt-12 ${slider ? "right-0" : "right-[-100%]"} flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[100vh] w-full max-w-[20rem]  p-4 shadow-xl shadow-blue-gray-900/5 transition-all duration-500 md:hidden z-50 `}>

                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">


                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <FaRegUserCircle size={25} />
                        </div>Profile
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <BsBoxSeam size={25} />
                        </div>Rrder
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <FaRegHeart size={25} />
                        </div>Wishlist
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <MdCardGiftcard size={25} />
                        </div>Gift Card
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <CiGift  size={25} />
                        </div>Best Combo
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <BiSolidCategoryAlt size={25} />
                        </div>Top Categories
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <IoBagAddOutline  size={25} />
                        </div>Recently Addied
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                        <BiSolidOffer size={25} />
                        </div>Top offers
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <MdOutlineSell size={25} />
                        </div>Best Selling
                    </div>

                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">

                        <div className="grid place-items-center mr-4">
                            <IoIosNotificationsOutline size={25} />
                        </div>Notifications<div className="grid place-items-center ml-auto justify-self-end">
                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" >
                                <span className="">1</span>
                            </div>
                        </div>
                    </div>

                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <IoSettingsOutline size={25} />
                        </div>Settings
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <FaPowerOff size={25} />
                        </div>Log Out
                    </div>
                </nav>
            </div>


        </>
    )
}

export default sidebar