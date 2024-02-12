import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./banner.css"
import { bannerdata } from '../../database/db';

const Banner = () => {
  const [data, setData] = useState([])


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // const getData = () => {
  //   axios.get("http://localhost:3002/bannerdata").then((res) => {
  //     setData(res.data);
  //   }).catch((err) => {
  //     console.log(err)
  //   })

  // }
  useEffect(() => {
    // getData()
  }, [])
  return (
    <>
      <div className=' overflow-hidden z-0'>


        <Carousel responsive={responsive} infinite={true} autoPlay={true}
          autoPlaySpeed={3000} className=' static z-0' >
          {bannerdata.map((item) => (
            <div className='mx-auto w-screen h-[50vh] static z-0' key={item.id}>
              <img src={item.path} alt="" className='w-full h-full' />
            </div>
          ))}
        </Carousel>;

      </div>
    </>
  )
}

export default Banner