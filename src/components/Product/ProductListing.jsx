import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import $ from 'jquery';

import "./page.css"



const ProductListing = () => {
    const { category } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const [range, setRange] = useState(null)
    const find_Category = data.map((item) => item.categoryName)
    const uniqueValues = Array.from(new Set(find_Category));
    const [filterPrice, setFilterPrice] = useState([])
    console.log(filterPrice);

    const handleClick = (value) => {
        navigate(`/productlist/${value}`)
        const filter = data.filter((item) => item.categoryName === value)
        setfilterdata(filter)
    }


    const handleToggle = () => {
        $("#toggle").slideToggle("slow");
    }

    const handleChange = (value) => {
        setRange(value)
        if (location.pathname === "/productlist") {
            let filter = data.filter((item) => item.price <= value)
            setFilterPrice(filter)
        }else{
            let filter = filterdata.filter((item) => item.price <= value)
            setFilterPrice(filter)
        }

    }

    const getData = async () => {
        const res = await axios.get("http://localhost:3002/product")
        setData(res.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className=' h-full w-screen px-6 pt-5 flex justify-between'>
            <div className='h-screen w-[20%] bg-gray-100' >
                <div>
                    <h2 className='text-xl font-medium py-2 font-sans px-3 flex justify-between'><span>Filter</span><span><Link to="/productlist" className='border border-black rounded-full text-sm px-2 py-1 hover:bg-black hover:text-white duration-500'>Clear </Link></span></h2>

                    <hr />
                </div>
                <div>
                    <h2 className='text-lg font-medium text-gray-700 py-2 font-sans px-3 flex justify-between items-center ' onClick={handleToggle}> <span>CATEGORIES</span> <span id='arrow ' className='rotate-[-180deg]' ><IoIosArrowDown /></span></h2>
                    <hr />

                    <form className='w-full h-fit py-3 hidden' id='toggle'>
                        {
                            uniqueValues.map((item) => (
                                <div className='flex gap-3 px-3' key={item} onClick={(e) => handleClick(e.target.value)}>
                                    <input type="radio" id={item} name="options" value={item} />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))
                        }

                    </form>

                </div>

                <div>
                    <h2 className='text-xl font-medium py-2 font-sans px-3 flex justify-between'>Range</h2>
                    <input type='range' min={2000} max={220000} className='mx-3 ps-2 ' onChange={(e) => handleChange(e.target.value)} />
                    <p className='px-3 flex w-full justify-between'><span className='border border-gray-600 px-5'>Min</span><button className='px-5 border-gray-600 border' >₹{range ? range : 2000}</button></p>
                    <hr />
                </div>


            </div>
            <div className='h-full w-[78%] '>
                <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                    <li className="inline-flex items-center">
                        <Link to='/' className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                            Home
                        </Link>
                        <IoIosArrowForward />
                    </li>
                    <li className="inline-flex items-center">
                        <Link to={location.pathname} className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                            {location.pathname}
                        </Link>
                        <IoIosArrowForward />
                    </li>
                </ol>

                <div className='py-2 flex gap-5'>
                    <span className='font-medium '>Short By</span>
                    <Link className='shorted'>Popularity</Link>
                    <Link className='shorted'>Price--Low to Ligh</Link>
                    <Link className='shorted'>Price--High to Low</Link>
                    <Link className='shorted'>Newest first</Link>
                </div>
                <hr />
                <div className='  grid grid-cols-4 gap-5 py-2 '>
                    {( category !== undefined && range !== null  ? filterPrice : category !== undefined ? filterdata  : range ? filterPrice : data)
                        .map((item) => {
                            return (
                                <div className='  bg-gray-100     transition-all duration-500 shadow-md  ' onClick={() => navigate(`/product/${item.id}`)} >
                                    <div className='h-48  bg-gray-300' >
                                        <img src={item.image} className='h-full w-full' />
                                    </div>
                                    <div className='px-4 w-full  bg-white   '>
                                        <p ><span className='font-medium pt-5'>₹{item.price}</span><span className='text-green-500 font-medium text-xs'> {item.discounted ? `₹${item.price - item.discounted}off` : null} </span></p>
                                        <p className='font-medium text-sm text-gray-500'>{item.brand}</p>
                                        <h2 className='font-medium '>{item.title.slice(0, 21)}....</h2>
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