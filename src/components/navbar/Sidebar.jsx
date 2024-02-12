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
import { MdClose } from "react-icons/md";


const sidebar = ({ slider, setSlider, token,logoutHandler,SetNotification }) => {

    const handleLogOut = ()=>{
        logoutHandler()
    }

    return (
        <>

            <div className={`h-[100vh]  w-fit fixed   pt-3   right-0 ${slider ? "" : "hidden"} bg-white z-50  transition-all duration-300 py-10 `} >
                <div className='float-end mr-5'>
                    <MdClose size={25} onClick={() => setSlider(false)} />
                </div>
                <ul className='py-10' onClick={()=>setSlider(false)}>

                    {token ? <>
                    <li className='hover:bg-gray-200 pe-20 py-2' >
                        <Link className='flex items-center gap-2 px-4  ' to="/profile" >
                            <FaRegUserCircle size={25} />
                            <span>
                                My Profile
                            </span>

                        </Link>
                    </li>
                    <li className='hover:bg-gray-200 pe-20 py-2' onClick={()=>SetNotification(true)}>
                        <Link className='flex items-center gap-2 px-4  ' >
                            <IoIosNotificationsOutline size={25} />
                            <span>
                                Notification
                            </span>
                            <span className='bg-gray-50 px-3 py-1 rounded-full'>
                                1
                            </span>
                        </Link>
                    </li>
                    <li className='hover:bg-gray-200 pe-20 py-2' >
                        <Link className='flex items-center gap-2 px-4  ' to="/orders">
                            <MdOutlineProductionQuantityLimits size={25} />
                            <span>
                                My Order
                            </span>

                        </Link>
                    </li>

                    <ul className='sm:hidden'>
                        <li className='hover:bg-gray-200 pe-20 py-2'>
                            <Link className='flex items-center gap-2 px-4 '>
                                <BiSolidOffer size={25} />
                                <span>
                                    Best Combo
                                </span>

                            </Link>
                        </li>
                        <li className='hover:bg-gray-200 pe-20 py-2'>
                            <Link className='flex items-center gap-2 px-4  '>
                                <MdOutlineCategory size={25} />
                                <span>
                                    Top Categories
                                </span>

                            </Link>
                        </li>
                        <li className='hover:bg-gray-200 pe-20 py-2' >
                            <Link className='flex items-center gap-2 px-4  '>
                                <IoBagAdd size={25} />
                                <span>
                                    Recently Addied
                                </span>

                            </Link>
                        </li>
                        <li className='hover:bg-gray-200 pe-20 py-2' >
                            <Link className='flex items-center gap-2 px-4  '>
                                <MdLocalOffer size={25} />
                                <span>
                                    Top offers
                                </span>

                            </Link>
                        </li>
                        <li className='hover:bg-gray-200 pe-20 py-2' >
                            <Link className='flex items-center gap-2 px-4  '>
                                <MdSell size={25} />
                                <span>
                                    Best Selling
                                </span>

                            </Link>
                        </li>
                    </ul>
                    <li className='hover:bg-gray-200 pe-20 py-2' >
                        <Link className='flex items-center gap-2 px-4  '>
                            <MdOutlinePrivacyTip size={25} />
                            <span>
                                Privacy And Policy
                            </span>

                        </Link>
                    </li>
                    <li className='hover:bg-gray-200 pe-20 py-2' >
                        <Link className='flex items-center gap-2 px-4  '>
                            <IoMdHelpCircle size={25} />
                            <span>
                                Help
                            </span>

                        </Link>
                    </li>
                    <li className='hover:bg-gray-200 pe-20 py-2' onClick={handleLogOut}>
                        <Link className='flex items-center gap-2 px-4  '>
                            <FaPowerOff size={25} />
                            <span>
                                LogOut
                            </span>

                        </Link>
                    </li>
                    </>:<>
                    <li className='hover:bg-gray-200 pe-20 py-2' onClick={()=>setSlider(false)} >
                        <Link to="/login" className='flex items-center gap-2 px-4  '>
                            <FaRegUserCircle size={25} />
                            <span>
                                Login
                            </span>

                        </Link>
                    </li>
                    <li className='hover:bg-gray-200 pe-20 py-2' >
                        <Link className='flex items-center gap-2 px-4  '>
                        <IoMdHelpCircle size={25} />
                            <span>
                                Help
                            </span>

                        </Link>
                    </li>
                    </>
                    }
                </ul>
            </div>


        </>
    )
}

export default sidebar