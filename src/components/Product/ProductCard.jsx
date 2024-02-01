import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

const ProductCard = ({ data = [] }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
    }

    return (
        <>
            <div className='mx-8 overflow-hidden
            ' >
                <Slider {...settings}>
                    {
                        data.map((item) => {
                            return (
                                <div className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                                    <Link className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
                                        <img className={item.image} alt="" />
                                        <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>39% Off</span>
                                    </Link>
                                    <div className='mt-4 px-5 pb-5'>
                                        <Link className='text-xl tracking-tight text-slate-900'>
                                            {item.title}
                                        </Link>
                                        <div className='mt-2 mb-5 flex items-center justify-between'>
                                            <p>
                                                <span class="text-3xl font-bold text-slate-900">$449</span>
                                                <span class="text-sm text-slate-900 line-through">$699</span>
                                            </p>
                                            <ReactStars count={5} value={3} color={'#ffd700'} size={24} />
                                        </div>
                                        <div>
                                            <button className='w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </>
    )
}

export default ProductCard