import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { useWishlistContext } from "../context/index"

const WishlistPage = ({ setWishlist, wishlist }) => {
    const navigate = useNavigate()
    const { Wishlist,removeToWish } = useWishlistContext()

    return (
        <div className={`"relative z-50 ${wishlist ? "" : "hidden"} `} >

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-50 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setWishlist(false)}>
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Close panel</span>
                                                <MdClose />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {Wishlist?.map((item) => {
                                                    return (
                                                        <li className="flex py-6" key={item.id}>
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src={item.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <Link to={`/product/${item.id}`} >{item.title.slice(0,18)}...</Link>
                                                                        </h3>
                                                                        <p className="ml-4">{`${item.currency}${item.price}`}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">


                                                                    <div className="float-end">
                                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>removeToWish(item)}>Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setWishlist(false)}>
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default WishlistPage