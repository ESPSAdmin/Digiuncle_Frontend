import React, { useEffect, useState } from 'react'
import { Banner, ProductCard } from '../components'
import Login from './Login'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useProductContext} from '../context';
import { product } from '../database/db';

const Home = () => {
  const [data, setData] = useState([]);

  const { RecentProduct } = useProductContext()

  // const getData = async () => {
  //   const res = await axios.get("http://localhost:3002/product")
  //   setData(res.data);
  // }
  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <>
    
      <Banner />
      <div className="py-3">
        {RecentProduct?.length === 0 ? null : <h2 className='mx-5 text-4xl font-serif font-semibold'>Recent Viewed</h2>}
        <ProductCard data={RecentProduct} />
      </div>
      <div className="py-3">
        <h2 className='mx-5 text-4xl font-serif font-semibold'>Best Selling</h2>
        <ProductCard data={product} />
        <Link to="/productlist" className='py-2 flex w-full justify-end items-center px-5'>

          <button className='bg-red-500 text-lg font-medium px-4 py-2 rounded-sm text-white' >View All Product</button>
        </Link>
      </div>



    </>
  )
}

export default Home