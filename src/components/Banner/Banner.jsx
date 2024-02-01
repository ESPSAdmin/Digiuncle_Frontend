import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Banner = () => {
  const [data, setData] = useState([])
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const getData = () => {
    axios.get("http://localhost:3002/bannerdata").then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err)
    })

  }
  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <div className='mx-8 overflow-hidden'>
        <div className=''>
        <Slider {...settings}>
          {data.map((item) => (
            <div className='mx-auto w-[90%] h-[60vh]'>
              <img src={item.path} alt="" className='w-full h-full' />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </>
  )
}

export default Banner