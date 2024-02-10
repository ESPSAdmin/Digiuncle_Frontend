import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";import { FaHeart } from "react-icons/fa";

import { useCartContext, useProductContext, useWishlistContext } from '../../context';
import axios from 'axios';

const ProductCard = ({ data = [] }) => {
    const navigate = useNavigate();
    const { addRecentProduct } = useProductContext();
    const { Wishlist, addToWishlist } = useWishlistContext(); // Assuming you have this context available

    const result = data.filter(item1 => Wishlist.some(item2 => item1.id === item2.id ));

    
    return (
        <>



            <div className='overflow-hidden px-2 sm:px-5 py-2' >
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-5  ' >
                    {data.map((item) => {
                        return (
                            <Link onClick={() => addRecentProduct(item)} >
                                <div className='border '>
                                    <div className=' relative h-32 sm:h-52 w-full  rounded-md overflow-hidden bg-gray-200' >
                                        <img src={item.image} alt="" className='size-full' onClick={() => navigate(`/product/${item.id}`)} />
                                        <div className='absolute h-5  w-5 bg-white top-2 right-3 cursor-default pointer-events-none' >
                                            <div className='pointer-events-auto' onClick={() =>addToWishlist(item)} >
                                                
                                                <FaHeart className= "text-gray-500" />
                                              
                                            </div>


                                        </div>
                                    </div>
                                    <div className='w-full h-24 px-3'>
                                        <h2 className='coustem sm:text-xl font-Coustom'>{item.title.slice(0, 15)}...</h2>
                                        <div > <span className='font font-medium sm:text-lg ' >{`${item.currency}${item.price}`}</span><span className='line-through font-medium text-xs sm:text-sm text-green-600 ps-3'>{item.discounted ? `${item.currency}${item.price - item.discounted}` : null}</span></div>
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

// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5]

// let arrayMatched = arr1.filter(value => arr2.includes(value))
// console.log(arrayMatched)