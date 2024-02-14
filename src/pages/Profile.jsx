import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
    return (

        <>
            <div className="bg-gray-100">

                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                               
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>

                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8 w-full">
                                    <div className='flex justify-center items-center gap-4'>
                                    <span clas="text-green-500">
                                        <FaRegUser />
                                    </span>
                                    <span className="tracking-wide">About</span>
                                    </div>
                                    
                                    <div className='float-end'>
                                    <FaRegEdit  size={25}/>
                                    </div>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            <div className="px-4 py-2">Jane</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <div className="px-4 py-2">Doe</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            <div className="px-4 py-2">Female</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            <div className="px-4 py-2">+11 998001001</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Current Address</div>
                                            <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            <div className="px-4 py-2">
                                                <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Birthday</div>
                                            <div className="px-4 py-2">Feb 06, 1998</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile