import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeitem } from '../Redux/Slices/CartSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context';
import "../App.css"

const Cart = () => {
  const counting = localStorage.getItem("quantity")
  const {Decrease,Increase} = useCartContext()
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch()
  const Price = cart.reduce((total, result) => total + result.price, 0)
const TotalPrice = Price*counting

  return (
    <>
      {
        cart.length > 0 ? <>
          <div className=' w-screen  flex  bg-gray-200 md:py-10'>
            <div className='h-[75vh] w-screen md:mx-8  flex flex-wrap sm:justify-between'>
              <div className='md:w-[70%]   rounded-xl w-screen h-full overflow-y-scroll scrollbar '>
                <div className='py-3 flex justify-between  bg-white px-5 items-center font-medium mb-5'>
                  <span className='text-xs sm:text-sm md:text-base'>Total Unique Item</span>
                  <button className='border py-1 px-2 text-xs sm:text-sm md:text-base'>{cart.length}</button>
                </div>
                {
                  cart.map((item) => {
                    return (
                      <div className='flex gap-5 bg-white px-5 py-2  ' key={item.id}>
                        <div className=' h-fit  sm:h-40 w-fit flex flex-col justify-between'>
                          <div className=' h-20 w-20 sm:h-28 sm:w-28  rounded-md' >
                            <img src={item.image} alt="product image"  className='h-full w-full'/>
                          </div>
                          <div className=' pt-4 flex items-center gap-2 sm:gap-1'>
                            <div className='sm:px-1  sm:py-1 border border-black rounded-full sm:text-lg' onClick={()=>Decrease(item)}><FaMinus /></div>
                            <div className=' px-2 sm:px-4  border border-black'>{counting}</div>
                            <div className='sm:px-1 sm:py-1 border border-black rounded-full sm:text-xl' onClick={Increase} ><FaPlus /></div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className=' text-xs sm:text-sm md:text-base font-medium'>{item.title}</p>
                            <p className='text-sm font-medium text-gray-600'>Size: 8,Grey</p>
                          </div>
                          <h2 className='text-sm font-medium text-gray-600 py-2'>Seller:HSAtlastradeFashion</h2>
                          <h2 className='text-sm font-medium text-gray-600 py-2'> <span className='line-through text-xs sm:text-sm md:text-base text-gray-500'>{item.discounted ? `${item.currency}${item.discounted}` : null}</span> <span className=' font-medium text-black  sm:text-sm md:text-lg ' >{`${item.currency}${item.price}`}</span> <span className='text-green-600'>74% Off  1 offer applied</span></h2>
                          <div className=' hidden sm:flex items-center gap-5'>
                            <button className='sm:text-md text-sm font-medium text-green-600' >ADD TO WISHLIST</button>
                            <button className='text-md font-medium text-red-500' onClick={() => { dispatch(removeitem(item)); toast.success("Item Remove") }} >Remover</button>
                          </div>
                        </div>

                      </div>
                    )
                  })
                }

              </div>
              <div className=' sm:hidden w-full flex items-center gap-5 bg-white justify-around '>
                <button className='sm:text-md text-sm font-medium text-green-600' >ADD TO WISHLIST</button>
                <button className='text-md font-medium text-red-500'>Remover</button>
              </div>
              <div className='h-fit md:w-[25%] md:mr-4 bg-white rounded-md w-screen'>
                <div className='py-3'>
                  <h2 className='ps-5 font-semibold text-xl text-gray-700'>PRICE DETAILS</h2>
                </div>
                <hr />
                <div>
                  <div className='flex justify-between px-5 py-2'>
                    <span className='text-lg font-medium' >Price ({cart.length} items)</span>
                    <span> ₹{TotalPrice}</span>
                  </div>
                  <div className='flex justify-between px-5 py-2'>
                    <span className='text-lg font-medium' >Discount</span>
                    <span className='text-green-500'> - ₹7000</span>
                  </div>
                  <div className='flex justify-between px-5 py-2'>
                    <span className='text-lg font-medium' >Delivery Charges</span>
                    <span className='line-through'> ₹7000 </span>
                  </div>
                  <div className='flex justify-between px-5 py-4 border-t-2 border-b-2 border-black'>
                    <span className='text-lg font-medium ' >Total Amount</span>
                    <span className='font-medium'> ₹{TotalPrice}</span>
                  </div>
                  <div className='text-green-600 text-md ps-4 py-2 font-medium '>
                    You will save ₹6,448 on this order
                  </div>

                </div>
                <div className='mx-3 py-2'>

                  <button className='text-xl bg-green-600 font-medium w-full py-1 rounded-lg text-white' >CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </>
          : <div className='h-full w-screen flex justify-center items-center flex-col '>
            <p className='text-3xl py-2 font-medium'>Cart is Empty </p>
            <img src='./image/EmptyCart.gif'  />
            <p><Link to="/" className='py-3 text-blue-600 text-2xl font-medium' >Back to Home </Link></p>
          </div>
      }
    </>
  )
}

export default Cart