import React from 'react'

const navbar2 = () => {
    return (
        <>
            <div className='h-14 max-w-screen hidden  md:block overflow-hidden z-0 ' >
                <nav className='h-full w-full mx-5 '>
                    <ul className='h-full flex items-center justify-evenly'>
                        <li>Best Selling </li>
                        <li>Top offers </li>
                        <li>Recently Addied </li>
                        <li>Top Categories </li>
                        <li>Best Combo</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default navbar2