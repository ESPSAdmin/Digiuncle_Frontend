import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import { IoCartOutline } from "react-icons/io5";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState([])
  console.log(item);
  const filterdata = item.filter((i) => i.id == id)
  console.log(filterdata);
  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/product`);
      setItem(response.data)
      console.log(response.data)
    } catch (err) {
      console.log('Error fetching product details:', err);
    }
  }

  useEffect(() => {
    fetchProductDetail()
  }, [id])

  return (
    <>
      {filterdata.map((sp) => (

        <div>
          <div className='grid grid-cols-2 gap-4 mx-8'>

            <div>
              <div className=' flex justify-between px-5'>
                <div>
                  <div className='h-20 w-20 bg-black '>
                    <img src={sp.image} alt="" />
                  </div>
                </div>
                <div className='h-[400px] w-[450px] ' >
                  <img src={sp.image} className="h-full w-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-yellow-500 py-3 text-xl font-medium text-white hover:bg-yellow-600 transition-all duration-200 flex items-center justify-center gap-3" ><IoCartOutline />Add to Cart</button>
                <button className="bg-orange-500 py-3 text-xl font-medium text-white hover:bg-orange-600 transition-all duration-200">Buy Now</button>
                
              </div>
            </div>
            <div className=''>
              <div className='border px-3 rounded-md' >
                <p>
                  <ReactStars count={5} value={3} color={'#ffd700'} size={24} />
                </p>
                <p className="text-2xl font-medium">{sp.title}</p>
                <p className="text-lg font-medium">₹{sp.price} <span className="text-green-500 text-sm">(you save  ₹{sp.price - sp.discounted})</span> </p>
                <p className="line-through text-sm">₹{sp.discounted} </p>

              </div>
              <div className="border  px-3 py-2 my-3">
                <h2 className="text-xl font-medium" > Size</h2>
                <button value="size" className="border-2 text-md px-3 rounded-full" >Size</button>
                <h2 className="text-xl font-medium" > Color</h2>
                <button value="Color" className="border-2 text-md px-3 rounded-full" >Color</button>

              </div>
              <div className="border px-3  rounded-md  uppercase text-gray-700" > Details:{sp.description}</div>
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default ProductDetail