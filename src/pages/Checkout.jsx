import React from 'react'
import { Form, Link } from 'react-router-dom'
import { useCartContext } from '../context'

const Checkout = () => {

    const { Cart } = useCartContext()
    const Price = Cart.reduce((total, result) => total + result.price * result.productcount, 0)
    return (
        <div className='p-5 flex  justify-between'>
            <div className='w-[70vw] ' >
                <h2 className='bg-gray-600 font-newFont text-white text-3xl font-medium px-6 ' >1.SHIPPING</h2>
                <div className='w-full p-3 bg-gray-200'>
                    <form className='w-full  bg-white py-2 '>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="fname" className='font-newFont text-lg font-medium' >First Name <span className='text-red-500'>* : </span></label>
                            <input type="text" placeholder='Enter First Name' id='fname' className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="lname" className='font-newFont text-lg font-medium' >Last Name <span className='text-red-500'>* : </span></label>
                            <input type="text" placeholder='Enter Last Name' id='lname' className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="postal" className='font-newFont text-lg font-medium' >Postal Code  <span className='text-red-500'>* : </span></label>
                            <input type="text" placeholder='Enter Postal Code' id='postal' pattern="[0-9]{6}" className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="address1" className='font-newFont text-lg font-medium' >Address Line 1 <span className='text-red-500'>* : </span></label>
                            <input type="text" placeholder='Address Line 1' id='address1' className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="address2" className='font-newFont text-lg font-medium' >Address Line 2 <span className='text-red-500'>* : </span></label>
                            <input type="text" placeholder='Address Line 2' id='address2' className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="phone" className='font-newFont text-lg font-medium' >Shipping Phone<span className='text-red-500'>* : </span></label>
                            <input type="text" placeholder='Phone No.' id='phone' className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='flex justify-between items-center w-[60%] ps-10 py-5' >
                            <label htmlFor="email" className='font-newFont text-lg font-medium' >E-mail<span className='text-red-500'>* : </span></label>
                            <input type="email" placeholder='E-mail' id='email' className='border-2 h-10 ps-3 w-[50%] rounded-sm' />
                        </div>
                        <div className='ps-10 font-newFont font-medium '>
                            <h2 >Payement Method</h2>

                            <div>
                                <label>
                                    <input type="radio" name="choice" value="Cash On Delivery" /> Cash on Delivery
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="choice" value="Pay Online" /> Pay Online
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-between items-center px-10  py-5' >
                            <p className='font-newFont font-bold' >Required <span className='text-red-500'>*</span></p>
                            <button className='font-Coustom bg-orange-500 text-lg px-3 py-1 text-white rounded-md' >Continue To Billing</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='w-[25vw] h-full   '>
                <div className='border ' >
                    <h2 className='bg-gray-200 font-newFont font-medium text-2xl ps-4' >SUMMERY</h2>
                    <div className='px-4'>
                        <div className='font-newFont font-medium py-2 w-full  flex justify-between  ' > <span>SUBTOTAL</span> <span>₹{Price}</span> </div>
                        <div className='font-newFont font-medium py-2 w-full  flex justify-between  ' > <span>SHIPPING & HANDLING</span> <span className='text-green-500' >free</span> </div>
                        <div className='font-newFont font-medium py-2 w-full  flex justify-between  ' > <span>TAXES</span> <span>₹0</span> </div>
                        <div className='font-newFont font-medium py-2 w-full text-xl  flex justify-between  ' > <span>TOTAL</span> <span>₹{Price}</span> </div>

                    </div>
                </div>
                <div className='border my-5' >
                    <h2 className='bg-gray-200 font-newFont font-medium text-2xl ps-4' >IN YOUR CART ({Cart.length})</h2>
                    <h2 className=' font-newFont font-medium text-2xl ps-4 py-1 border-b' >ARRIVES 10/02 - 16/02 </h2>
                    {
                        Cart.map((item) => {
                            return (
                                <div className='px-4 flex  gap-2 border-b py-2'>
                                    <div className='w-[40%] h-28'>
                                        <img src={item.image} className='size-full' alt="" />
                                    </div>
                                    <div className='font-newFont font-medium'>
                                        <p>{item.title}</p>
                                        <p>style </p>
                                        <p>Qty :{item.productcount}</p>
                                        <p>Price : {`${item.currency}${item.price}`} ( of one pcs )</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='py-3 font-newFont font-medium px-5 '>
                        <Link to="/cart" className='hover:underline duration-500 hover:text-blue-600' >Edit Cart</Link>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Checkout