import React from 'react'

const Orders = () => {
  return (
    <div className='h-fit w-full p-7  bg-gray-200'>
      <div className='px-4 border-2 border-gray-300 bg-white py-2  rounded-xl'>
        <div className='flex justify-between py-3 ' >
          <div className='w-48'>
            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full' />
          </div>
          <div>
            <h2 className='font-Coustom font-bold text-xl' >Title</h2>
            <p>price</p>
            <p>description</p>
          </div>
          <div>
            <h2 className='font-Coustom font-bold text-xl'>Delivery address</h2>
            <p>address</p>
          </div>
          <div>
            <h2 className='font-Coustom font-bold text-xl'>
            Shipping Updates
            </h2>
          </div>
          
        </div>
        <hr/>
        <div className='py-3'>
          <h2 className='font-medium font-newFont' >Order Delivery Date 10/12/2024</h2>
          <div className='h-[7px] w-full bg-blue-700 rounded-xl my-4'></div>
          <div className='flex w-full justify-between'>
            <span className='font-roboto font-bold'>Order Placed</span>
            <span className='font-roboto font-bold'>Processing</span>
            <span className='font-roboto font-bold'>Shipped</span>
            <span className='font-roboto font-bold'>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders