import React, { useEffect, useState } from 'react'
import { Banner, ProductCard } from '../components'
import Login from './Login'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useProductContext } from '../context';

const Home = () => {
  const [data, setData] = useState([]);
  
  const {RecentProduct} = useProductContext()
  console.log(RecentProduct);

  const getData = async () => {
    const res = await axios.get("http://localhost:3002/product")
    setData(res.data);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Banner />
      <div className="py-3">
        {RecentProduct != [] ? <p className="py-2"><h2 className='mx-8 text-4xl font-serif font-semibold'>Recent Viewed</h2></p> : null}
        <ProductCard data={RecentProduct} />
      </div>
      <div className="py-3">
        <p className="py-2"><h2 className='mx-8 text-4xl font-serif font-semibold'>Best Selling</h2></p>
        <ProductCard data={data} />
        <div className="py-3 bg-gray-100 flex justify-center">
          <Link to="/productlist" className="text-2xl">See all products...</Link>
        </div>
      </div>
     
    </>
  )
}

export default Home