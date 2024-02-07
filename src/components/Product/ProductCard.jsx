import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import 'react-multi-carousel/lib/styles.css';
import { useCartContext, useProductContext } from '../../context';

const ProductCard = ({ data }) => {
    console.log("data", data);
    // const data = []
    const [toggleCart, Settogglecart] = useState([])
    const { addToCart } = useCartContext()
    const { addRecentProduct } = useProductContext()

    const settings = {
        slidesToShow: data.length < 4 ?  data.length : 4,
        slidesToScroll: 1,
    }



    return (
        <>
            <div className=' overflow-hidden
            ' >

                <div className='mx-8'>
                    {data.length > 4 ? <Slider {...settings} className='w-[100%] py-4'>
                        {data.map((product) => (
                            <div key={product.id} className='py-4'>
                                <div className='border py-3 rounded-lg mx-3 px-3 border-solid border-slate-500'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <Link to={`/product/${product.id}`} onClick={() => addRecentProduct(product)}>
                                                <img src={product.image} alt="" className='size-44' />
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Link><h4 className='font-medium'>{product.title.slice(0, 20)} ...</h4></Link>
                                        <p className='text-[14px] text-gray-700 font-semibold'>{product.description.slice(0, 55)} ...</p>
                                        <ReactStars
                                            count={product.rating}
                                            size={24}
                                            activeColor="#5c5470"
                                            isHalf={true}
                                            value={product.rating}
                                            edit={false}
                                        />
                                        <button className='border-2 border-solid border-gray-700 w-full py-2 mt-3 rounded-full font-bold'>Add to cart</button>
                                        <button className='bg-gray-700 w-full py-2 mt-3 text-white rounded-full font-bold'>Buy now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider> 
                    : 
                    <>
                    <div className='grid grid-cols-4 gap-2'>
                    {data.map((product) => (
                            <div key={product.id} className='py-4'>
                                <div className='border py-3 rounded-lg mx-3 px-3 border-solid border-slate-500'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <Link to={`/product/${product.id}`} onClick={() => addRecentProduct(product)}>
                                                <img src={product.image} alt="" className='size-44' />
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Link><h4 className='font-medium'>{product.title.slice(0, 20)} ...</h4></Link>
                                        <p className='text-[14px] text-gray-700 font-semibold'>{product.description.slice(0, 55)} ...</p>
                                        <ReactStars
                                            count={product.rating}
                                            size={24}
                                            activeColor="#5c5470"
                                            isHalf={true}
                                            value={product.rating}
                                            edit={false}
                                        />
                                        <button className='border-2 border-solid border-gray-700 w-full py-2 mt-3 rounded-full font-bold'>Add to cart</button>
                                        <button className='bg-gray-700 w-full py-2 mt-3 text-white rounded-full font-bold'>Buy now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </>}
                </div>
            </div>

        </>
    )
}

export default ProductCard