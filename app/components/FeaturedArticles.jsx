"use client"
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  
    const images=[
        {
            url:"https://amindset.co/images/Psychology_Today.png",
            text:"Psycology Today"

        },
        {
            url:"https://amindset.co/images/Self.png",
            text:"Self"

        },
        {
            url:"https://amindset.co/images/behv.png",
            text:"Behaviral And Bussiness Health"

        },
        {
            url:"https://amindset.co/images/Psychology_Today.png",
            text:"Psycology Today"

        }

    ]
    
  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    mobileFirst:true,
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
    <Slider {...settings}  className="p-4 ">
      {images.map((data)=>(
        <div className="flex justify-center items-center flex-wrap p-2 shadow-md border">
            <img className="m-auto h-[170px] md:h-[200px]" src={data.url} alt="" />
            <p className="text-center ">{data.text}</p>
        </div>
       ))}
     
    </Slider>
  );
}