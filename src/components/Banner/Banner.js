import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./banner.css"

const Banner = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get("http://localhost:3002/bannerdata").then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
    })
    return (
        <>
            <div className='h-fit sm:h-[60vh] w-screen overflow-x-hidden static z-0 p-0 m-0 ' >
                <Carousel
                    additionalTransfrom={0}
                    className=" h-full w-screen static  z-0"
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3000}
                    showDots={true}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1
                        }
                    }}

                >
                    {data.map((item) => (
                        <div className=' static z-0' key={item.id} >
                            <img
                                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                className="h-full w-full"
                            />
                        </div>
                    ))}




                </Carousel>
            </div>
        </>
    )
}

export default Banner