import React, { useEffect, useState } from 'react'
import { Banner, ProductCard } from '../components'
import Login from './Login'
import axios from 'axios';

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
    <div>
      <h2 className='ps-8 text-xl font-serif font-semibold'>Best Selling</h2>
      <ProductCard data={data}/>
    </div>
    
    </>
  )
}

export default Home