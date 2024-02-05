import React, { useEffect, useState } from 'react'
import "./page.css"
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const ProductListing = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:3002/product")
        setData(res.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className=' h-full w-screen px-6 pt-5 flex justify-between'>
            <div className='h-full w-[20%] bg-gray-100' >
                <div>
                    <h2 className='text-xl font-medium py-2 font-sans px-3'>Filter</h2>
                    <hr />
                </div>
                <div>
                    <h2 className='text-xl font-medium py-2 font-sans px-3'>Gender</h2>
                    <hr />
                </div>


            </div>
            <div className='h-full w-[78%] '>
                <ol class="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                    <li class="inline-flex items-center">
                        <Link to='/' class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                            Home
                        </Link>
                        <IoIosArrowForward />
                    </li>
                    <li class="inline-flex items-center">
                        <Link to={location.pathname} class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                            {location.pathname}
                        </Link>
                        <IoIosArrowForward />
                    </li>
                </ol>
                <div className='  grid grid-cols-4 gap-5 py-2 '>
                    {
                        data.map((item) => {
                            return (
                                <div className='  bg-gray-100     transition-all duration-500 shadow-md  ' onClick={() => navigate(`/product/${item.id}`)} >
                                    <div className='h-48  bg-gray-300' >
                                        <img src={item.image} className='h-full w-full' />
                                    </div>
                                    <div className='px-4 w-full  bg-white   '>
                                        <p ><span className='font-medium pt-5'>₹{item.price}</span><span className='text-green-500 font-medium text-xs'> {item.discounted ? `₹${item.price - item.discounted}off`: null} </span></p>
                                        <p className='font-medium text-sm text-gray-500'>{item.brand}</p>
                                        <h2 className='font-medium '>{ item.title.slice(0,21) }....</h2>
                                        <button className='font-medium mt-4 border border-black px-10 py-1 rounded-full mx-5 mb-3 ' >Buy now</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default ProductListing