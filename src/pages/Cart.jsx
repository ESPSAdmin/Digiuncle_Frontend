import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Cart = () => {
  return (
    <div className=' w-screen  flex mb-48 bg-gray-200 py-10'>
      <div className='h-full w-full mx-8  flex justify-between'>
        <div className='h-full w-[70%]  rounded-xl '>
          <div className='py-3 flex justify-between  bg-white px-5 items-center font-medium mb-5'>
            <span>Form Save Addresses</span>
            <button className='border py-1 px-2'>Enter Delivery Pincode </button>
          </div>
          <div className='flex gap-5 bg-white '>
            <div className='h-40 w-fit flex flex-col justify-between'>
              <div className='h-28 w-28 bg-black' ></div>
              <div className='flex items-center gap-1'>
                <div className='px-1  py-1 border border-black rounded-full text-lg'><FaPlus /></div>
                <div className='px-4  border border-black'>1</div>
                <div className='px-1 py-1 border border-black rounded-full text-xl' ><FaMinus /></div>
              </div>
            </div>
            <div>
              <div>
                <p className='font-medium'>PUMA Player Casuals For Men</p>
                <p className='text-sm font-medium text-gray-600'>Size: 8,Grey</p>
              </div>
              <h2 className='text-sm font-medium text-gray-600 py-2'>Seller:HSAtlastradeFashion</h2>
              <h2 className='text-sm font-medium text-gray-600 py-2'> <span className='line-through text-gray-700'>₹8,598</span> <span className='text-xl font-medium text-black' >₹2,150</span> <span className='text-green-600'>74% Off  1 offer applied</span></h2>
              <div className='flex items-center gap-5'>
                <button className='text-md font-medium text-green-600' >ADD TO WISHLIST</button>
                <button className='text-md font-medium text-red-500'>Remover</button>
              </div>
            </div>
            
          </div>

        </div>
        <div className='h-full w-[25%] mr-4 bg-white rounded-md'>
          <div className='py-3'>
            <h2 className='ps-5 font-semibold text-xl text-gray-700'>PRICE DETAILS</h2>
          </div>
          <hr />
          <div>
            <div className='flex justify-between px-5 py-2'>
              <span className='text-lg font-medium' >Price (1 items)</span>
              <span> ₹7000</span>
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
              <span className='line-through'> ₹7000 </span>
            </div>
            <div className='text-green-600 text-md ps-4 py-2 font-medium '>
              You will save ₹6,448 on this order
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart