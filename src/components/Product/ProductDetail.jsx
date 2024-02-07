import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import { IoCartOutline } from "react-icons/io5"
import { useCartContext, useProductContext } from '../../context';

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState([])
  const filterdata = item.filter((i) => i.id == id)
  const {addToCart} = useCartContext()
  // const addToCart = (item) => {
  //   const isItemExist = cart.find((cartItem) => cartItem.id === item.id);
  //   if (isItemExist) {
  //     toast.error("Item already in the cart");
  //   } else {
  //     dispatch(additem(item))
  //     toast.success(`${cart.length + 1} Item Addied Successfully`)
  //   }
  // }

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/product`);
      setItem(response.data)
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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8'>

            <div>
              <div className=' flex justify-between flex-wrap-reverse  px-5'>
                <div className='block md:flex pb-5'>
                  <div className='h-20 w-20 border '>
                    <img src={sp.image} alt="" />
                  </div>
                </div>
                <div className='w-full sm:h-[400px] sm:w-[500px] ' >
                  <img src={sp.image} className="h-full w-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-yellow-500 py-3 text-xl font-medium text-white hover:bg-yellow-600 transition-all duration-200 flex items-center justify-center gap-3" onClick={() => addToCart(sp)} ><IoCartOutline />Add to Cart</button>
                <button className="bg-orange-500 py-3 text-xl font-medium text-white hover:bg-orange-600 transition-all duration-200">Buy Now</button>

              </div>
            </div>
            <div className=''>
              <div className='border px-3 py-1 rounded-md' >

                <p className="text-2xl font-medium">{sp.title}</p>
                <p className="text-lg font-medium">₹{sp.price} <span className="text-green-500 text-sm">{sp.discounted ? `(you save  ₹${sp.price - sp.discounted})` : null}</span> </p>
                <p className="line-through text-sm">{sp.discounted ? `₹${sp.discounted}` : null} </p>
                <p>
                  <ReactStars count={5} value={sp.rating} color={'#ffd700'} size={24} onChange={null} />
                </p>

              </div>
              <div className="border  px-3 py-2 my-3">
                <h2 className="text-xl font-medium" > Size</h2>
                <button value="size" className="border-2 text-md px-3 rounded-full" >Size</button>
                <h2 className="text-xl font-medium" > Color</h2>
                <button value="Color" className="border-2 text-md px-3 rounded-full" >Color</button>

              </div>
              <div className="border px-3  rounded-md  uppercase text-gray-700 py-2" >
                <h2 className='font-bold text-2xl'>DETAILS</h2>
                <div>
                  <span className='font-bold'>description : </span><span className='font-medium'>{sp.description}</span>
                </div>
                <div>
                  <span className='font-bold'>barnd : </span><span className='font-medium'>{sp.brand}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default ProductDetail