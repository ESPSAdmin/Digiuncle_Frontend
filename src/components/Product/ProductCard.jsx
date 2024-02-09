import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useCartContext, useProductContext } from '../../context';

const ProductCard = ({ data = [] }) => {
    const { addRecentProduct } = useProductContext()

    return (
        <>
        
            

            <div className='overflow-hidden px-2 sm:px-5 py-2' >
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-5  ' >
                    {data.map((item) => {
                        return (
                            <Link to={`/product/${item.id}`} onClick={()=>addRecentProduct(item)} >
                            <div className='border '>
                                <div className=' h-32 sm:h-52 w-full  rounded-md overflow-hidden bg-gray-200' >
                                    <img src={item.image} alt="" className='size-full' />
                                </div>
                                <div className='w-full h-24 px-3'>
                                    <h2 className='coustem sm:text-xl font-Coustom'>{item.title.slice(0,15)}...</h2>
                                    <div > <span className='font font-medium sm:text-lg ' >{`${item.currency}${item.price}`}</span><span className='line-through font-medium text-xs sm:text-sm text-green-600 ps-3'>{item.discounted ?  `${item.currency}${item.price - item.discounted}` : null}</span></div>
                                    <div className='flex items-center gap-4'><ReactStars
                                    className='text-xl'
                                            count={item.rating}
                                            activeColor="#5c5470"
                                            isHalf={true}
                                            value={item.rating}
                                            edit={false}
                                        />
                                        <span className='font-medium text-gray-600' >({item.rating})</span>
                                        </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
                
            </div>

        </>
    )
}

export default ProductCard