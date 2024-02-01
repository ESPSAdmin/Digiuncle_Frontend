import React, { useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { MdSell } from "react-icons/md";


const sidebar = ({ slider }) => {

    return (
        <>

            <div className={`h-[100vh] sm:h-fit w-fit absolute  top-24 pt-3 md:top-20 pb-20 pe-20 right-0 ${slider ? "" : "hidden"} bg-white z-50 sm:top-16 transition-all duration-300 `} >
                <ul>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <FaRegUserCircle size={25} />
                            <span>
                                My Profile
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <IoIosNotificationsOutline size={25} />
                            <span>
                                Notification
                            </span>
                            <span className='bg-gray-50 px-3 py-1 rounded-full'>
                                1
                            </span>
                        </Link>
                    </li>
                    


                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <MdOutlineProductionQuantityLimits size={25} />
                            <span>
                                My Order
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <BiSolidOffer size={25} />
                            <span>
                            Best Combo
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <MdOutlineCategory size={25} />
                            <span>
                            Top Categories
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <IoBagAdd size={25} />
                            <span>
                            Recently Addied 
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <MdLocalOffer size={25} />
                            <span>
                            Top offers
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <MdSell size={25} />
                            <span>
                            Best Selling
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <MdOutlinePrivacyTip size={25} />
                            <span>
                                Privacy And Policy
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <IoMdHelpCircle size={25} />
                            <span>
                                Help
                            </span>

                        </Link>
                    </li>
                    <li >
                        <Link className='flex items-center gap-2 px-4  mb-5'>
                            <FaPowerOff size={25} />
                            <span>
                                LogOut
                            </span>

                        </Link>
                    </li>
                    
                </ul>
            </div>


        </>
    )
}

export default sidebar