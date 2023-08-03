import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col p-2 md:flex-row mt-5 md:mt-0 items-center justify-between '>
        <img  className="md:w-[700px] md:h-[400px]" src="https://amindset.co/images/ourstory.png" alt="" />
        <div className='border border-b-2 shadow-xl p-10 mb-8 '>
            <p className='font-bold text-xl'>Our Story</p>
            <p className='text-gray-700 leading-6x mt-4 ' >Amindset removes the barriers so everyone can instantly connect with a 
                healthcare pro
                vider. We are a team of innovators, strategists and developers that
                 came together to make it easy to meet with someone you can talk to 
                 on a secure platform. We make it simple, safe and fun.</p>
        </div>
    </div>
  )
}

export default About