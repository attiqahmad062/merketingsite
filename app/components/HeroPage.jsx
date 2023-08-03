import React from 'react'
import Navbar from './Navbar'
const HeroPage = () => {
  return (

    <div>
        <Navbar />
        <div className='relative   md:h-[400px]  md:flex  md:justify-between '>
            
            <p className='absolute  text-white md:text-black md:relative text-center pt-8 md:pt-0  flex items-center mx-auto text-3xl justify-center'>Amindset <br />
Quality care one  at a time</p>
{/* <button className='ms-center block md:visible lg:visible bg-blue-500'>Find Provider</button> */}
    
            <img className='w-screen md:h-[400px] md:w-[600px]'  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT58maSNwSE4QYhpzwPktJMHID5aS1ZitR1egEkjKMWSqKum9m_" alt="" />
        </div>
        </div>
  )
}

export default HeroPage