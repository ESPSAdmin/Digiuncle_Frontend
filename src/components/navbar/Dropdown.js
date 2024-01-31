import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { TiGift } from "react-icons/ti";

export const LoginHover = ({hover,sethover}) => {
    return ( 
        <div className={`h-fit w-60 shadow-md shadow-slate-900 rounded-lg absolute top-16 z-50 right-20 ${hover ? "" : "hidden"}` } onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} >
            <div className="flex justify-between items-center px-3 h-12 w-full border-b-2 border-blue-700">
                <div className=" font-semibold text-lg" >New Customer</div>
                <div className="text-blue-700 font-bold text-xl">
                    Sign Up
                </div>
                
            </div>
            
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><FaRegUserCircle/>My profile</div>
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><BsBoxSeam/>Order</div>
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><FaRegHeart/>Wishlist</div>
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><MdCardGiftcard />Gift Cards</div>
             
        </div>
     );
}
export const Dotes = ({dotes,setdotes}) => {
    return ( 
        <div className={`h-fit w-60 shadow-md shadow-slate-900 rounded-lg absolute top-14 pt-5 right-5 z-50 ${dotes ? "" : "hidden"}` } onMouseEnter={()=>setdotes(true)} onMouseLeave={()=>setdotes(false)} >
            
            
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><FaRegUserCircle/>Notification Preferences</div>
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><BsBoxSeam/>24x7 Custmoer Care</div>
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><FaRegHeart/>Adverties</div>
            <div className=" py-2 flex gap-3 items-center pl-3 hover:cursor-pointer hover:bg-gray-300 "><TiGift/>Download App</div>
             
        </div>
     );
}
 