import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
 

    return (
        <footer className="bg-[#172337] text-blue-500 dark:bg-white">
            <div className="container mx-auto px-6 pb-5">


                <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

                <div className="h-full grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <div>
                        <p className="font-semibold text-gray-300 dark:text-white">ABOUT</p>

                        <div className="mt-5 flex flex-col text-blue-400 items-start space-y-2">
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Contact Us</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">About Us</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Digiuncle Store</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Home</Link>
                            </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-300 dark:text-white">HELP</p>

                        <div className="mt-5 flex flex-col text-blue-400 items-start space-y-2">
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Payement</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Shipping</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Cancellation & Return</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">FAQ</Link>
                            </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-300 dark:text-white">COMPANY POLICY</p>

                        <div className="mt-5 flex flex-col text-blue-400 items-start space-y-2">
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Cancellation & Return</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Teams Of Use</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Security</Link>
                            <Link href="#" className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Privacy</Link>
                            </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-300 dark:text-white">SOCIAL</p>

                        <div className="mt-5 flex flex-col text-blue-400 items-start space-y-2">
                            <Link  className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Facebook</Link>
                            <Link  className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Instagram</Link>
                            <Link  className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">YouTube</Link>
                            <Link  className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Twitter</Link>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-300 dark:text-white">Address</p>

                        <div className="mt-5 flex flex-col text-blue-400 items-start space-y-2">
                            <Link to="https://www.google.com/maps/place/Achievers+Mall/@28.395913,77.264376,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdf501fdf3a85:0x5755eab438fd5821!8m2!3d28.395913!4d77.2669563!16s%2Fg%2F11kcmd1bz1?entry=ttu"  className=" transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Office 15-19 Achiver center point ,sector 49 ,Kalindi Hill Fridabad Haryana 121001</Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <Link  className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"><span className='text-[#41d8f8]' >Digi</span><span className='text-[#f24572]'>Uncle</span></Link>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright 2023-{new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer