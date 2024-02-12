import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import { product } from '../../database/db';

const SearchBar = () => {
    const [search,setSearch] = useState("")
    const [data,setdata] = useState([])
   
    const getData = (value)=>{
        // axios.get("http://localhost:3002/product").then((res)=>{
            let result = product.filter((item)=>{
                return value && item && item.title && item.title?.toLowerCase().includes(value)
            })
            // result = result.map((item)=>item.title)
            setdata(result)
            
        // }).catch((err)=>{
        //     console.log(err.message)
        // })
    }
    const handleSearch =(value)=>{
        setSearch(value)
        getData(value)
    }
   
    return (
        <div className='relative'>
            <Link className="flex items-center relative">
                <input type="text" placeholder="Search product" className="md:w-[250px] lg:w-[400px]  px-6 h-11 bg-gray-100 rounded-full focus:outline-none py-1" value={search} onChange={(e)=>handleSearch(e.target.value)} />
                <IoIosSearch size={20} className="absolute right-3"  />
            </Link>
            <div className={`absolute ${search === "" ? "hidden" : "block" } top-16 max-h-[60vh] overflow-y-scroll w-full bg-white`}  >
               {data?.length !== 0  ?  <ul  >
                
                    {
                        data.map((item)=>{
                            return (
                                <Link to={`/product/${item.id}`}  key={item.id} onClick={()=>setSearch("")} >
                                    <IoIosSearch size={20} className="absolute right-3"  />
                                <li className='hover:bg-gray-100 py-2 px-5' >{item.title}</li>
                                </Link>
                                
                            )
                        })
                    }
                    
                </ul>
                : null
                }

            </div>
        </div>
    )
}

export default SearchBar