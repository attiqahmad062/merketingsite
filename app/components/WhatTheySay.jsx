"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const WhatTheySay = () => {
    
    const images=[
        {
            url:"https://amindset.co/images/prov1.png",
            text:"Psycology Today",
            desc:"Don’t waste time, gas, or energy on going to see a health care provider. At Amindset, our providers deliver direct consultations and appointments. Our simple and easy to use live chat platform helps you communicate with providers in a timely manner."

        },
        {
            url:"https://amindset.co/images/prov2.png",
            text:"Psycology Today",
            desc:"Don’t waste time, gas, or energy on going to see a health care provider. At Amindset, our providers deliver direct consultations and appointments. Our simple and easy to use live chat platform helps you communicate with providers in a timely manner."

        },
        {
            url:"https://amindset.co/images/prov3.png",
            text:"Psycology Today",
            desc:"Don’t waste time, gas, or energy on going to see a health care provider. At Amindset, our providers deliver direct consultations and appointments. Our simple and easy to use live chat platform helps you communicate with providers in a timely manner."

        },
        {
            url:"https://amindset.co/images/prov1.png",
            text:"Psycology Today",
            desc:"Don’t waste time, gas, or energy on going to see a health care provider. At Amindset, our providers deliver direct consultations and appointments. Our simple and easy to use live chat platform helps you communicate with providers in a timely manner."

        }

    ]
    
  var settings = {

    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    mobileFirst:true,
    // centerMode:true,
    // centerPadding:'50px',
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }
 
    }, {
 
      breakpoint: 300,
      settings:  {
        slidesToShow: 1,
        dots: true
      }// destroys slick
 
    }]
  };
  return (
    <div className='w-[95%]'>
        <p  className='font-semibold text-xl text-center'>What They Say</p>
        <p className='font-semibold text-xl text-center'>______</p>
        <Slider {...settings}  className="">
      {images.map((data)=>(
        <div className="flex m-10   relative bg-[#f2f3fa] p-2 pt-6  md:px-10 md:py-10 justify-center items-center flex-wrap  shadow-md border">
            <img className="rounded-lg absolute top-[-30px] z-10 m-auto h-[50px] " src={data.url} alt="" />
            <p className=" text-sm  text-gray-500">{data.desc}</p>
            <p className=" mt-4 md:text-xl md:font-semibold">{data.text}</p>
        </div>
       ))}
     
    </Slider>
    </div>
  )
}

export default WhatTheySay