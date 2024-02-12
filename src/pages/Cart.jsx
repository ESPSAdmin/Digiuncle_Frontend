import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context';
import "../App.css"

const Cart = () => {
  const navigate = useNavigate()
  const {Decrease,Increase,Cart ,removeItem} = useCartContext()
  const Price = Cart?.reduce((total, result) => total + result.price * result.productcount, 0)
 

  return (
    <>
      {
        Cart?.length > 0 ? <>
          <div className=' w-screen  flex  bg-gray-200 md:py-10'>
            <div className='h-fit md:h-[75vh] w-screen md:mx-8  flex flex-wrap sm:justify-between'>
              <div className='md:w-[70%]   rounded-xl w-screen h-full overflow-y-scroll scrollbar '>
                <div className='py-3 flex justify-between  bg-white px-5 items-center font-medium mb-5'>
                  <span className='text-xs sm:text-sm md:text-base'>Total Unique Item</span>
                  <button className='border py-1 px-2 text-xs sm:text-sm md:text-base'>{Cart?.length}</button>
                </div>
                {
                  Cart?.map((item) => {
                    return (
                      <div className='flex gap-5 bg-white px-5 py-2  ' key={item.id}>
                        <div className=' h-fit  sm:h-40 w-fit flex flex-col justify-between'>
                          <div className=' h-20 w-20 sm:h-28 sm:w-28  rounded-md' >
                            <img src={item.image} alt="product image"  className='h-full w-full'/>
                          </div>
                          <div className=' mt-4 px-2 flex items-center gap-2 sm:gap-1 border border-black rounded-full '>
                            <div className='sm:px-1  sm:py-1   sm:text-lg' onClick={()=>{Decrease(item);}}><FaMinus /></div>
                            <div className=' px-2 sm:px-4  '>{item.productcount}</div>
                            <div className='sm:px-1 sm:py-1   sm:text-xl' onClick={()=>Increase(item)} ><FaPlus /></div>
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
                            <button className='text-md font-medium text-red-500' onClick={() => {removeItem(item); toast.success("Item Remove") }} >Remover</button>
                          </div>
                        </div>

                      </div>
                    )
                  })
                }

              </div>
              {/* <div className=' sm:hidden w-full flex items-center gap-5 bg-white justify-around '>
                <button className='sm:text-md text-sm font-medium text-green-600' >ADD TO WISHLIST</button>
                <button className='text-md font-medium text-red-500' onClick={() => {removeItem(item); toast.success("Item Remove") }}>Remover</button>
              </div> */}
              <div className='h-fit md:w-[25%] md:mr-4 bg-white rounded-md w-screen'>
                <div className='py-3'>
                  <h2 className='ps-5 font-semibold text-xl text-gray-700'>PRICE DETAILS</h2>
                </div>
                <hr />
                <div>
                  <div className='flex justify-between px-5 py-2'>
                    <span className='text-lg font-medium' >Price ({Cart?.length} items)</span>
                    <span> ₹{Price}</span>
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
                    <span className='font-medium'> ₹{Price}</span>
                  </div>
                  <div className='text-green-600 text-md ps-4 py-2 font-medium '>
                    You will save ₹6,448 on this order
                  </div>

                </div>
                <div className='mx-3 py-2'>

                  <button className='text-xl bg-green-600 font-medium w-full py-1 rounded-lg text-white' onClick={()=>navigate("/checkout")} >CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </>
          : <div className='h-full w-screen flex justify-center items-center flex-col '>
            <p className='text-3xl py-2 font-medium'>Cart is Empty </p>
            <img src='./image/EmptyCart.gif'  />
            <div><Link to="/" className='py-3 text-blue-600 text-2xl font-medium' >Back to Home </Link></div>
          </div>
      }
    </>
  )
}

export default Cart