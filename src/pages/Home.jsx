import React, { useEffect, useState } from 'react'
import { Banner, ProductCard } from '../components'
import Login from './Login'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data,setData]=useState([]);
  const getData = async()=>{
const res =  await axios.get("http://localhost:3002/product")
 setData(res.data);
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <Banner/>
    <div className="py-3">
      <p className="py-2"><h2 className='mx-8 text-4xl font-serif font-semibold'>Best Selling</h2></p>
      <ProductCard data={data}/>
      <div className="py-3 bg-gray-100 flex justify-center"> 
        <Link className="text-2xl">See all products...</Link>
      </div>
    </div>
    
    </>
  )
}

export default Home