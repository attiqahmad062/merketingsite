"use client"


import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slidesData = [
    {
      id: 1,
      imageUrl: 'https://amindset.co/img/maryland.6fbe97d7.png',
      altText: 'Slide 1',
    },
    {
      id: 2,
      imageUrl: 'https://amindset.co/img/howard.aec444c4.jpg',
      altText: 'Slide 2',
    },
    {
      id: 3,
      imageUrl: 'https://amindset.co/img/bowie.3c9d0d2d.png',
      altText: 'Slide 3',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

 

  return (
    <div className="relative h-[200px]  bg-[#808080] overflow-hidden">
      <div className="flex transition-transform   duration-500 ease-in-out transform translate-x-[-100%]">
        {slidesData.map((slide, index) => (
          <div key={slide.id} className={`w-screen h-[400px] flex-none m-auto transition-transform transform ${currentSlide === index ? 'translate-x-0' : 'translate-x-full'}`}>
            <img src={slide.imageUrl} alt={slide.altText} className="object-cover items-center  h-[100px] " />
          </div>
        ))}
      </div>
     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slidesData.map((slide, index) => (
          <span
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`inline-block w-3 h-3 mx-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
