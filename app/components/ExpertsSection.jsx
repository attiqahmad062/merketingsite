import React from 'react'

const ExpertsSection = () => {
    const Experts = [
        {
          id: 1,
          imageUrl: 'https://amindset.co/images/Provider_1.png',
          text: 'Confidence Building',
        },
        {
          id: 2,
          imageUrl: 'https://amindset.co/images/Provider_1.png',
          text: 'Confidence Building',
        },
        {
          id: 3,
          imageUrl: 'https://amindset.co/images/Provider_3.png',
          text: 'Aminata Kamara',
          
        },
       
         
      ];
  return (
    <>
    <div className='flex fled-col md:flex-row flex-wrap gap-12 p-3 md:p-10'>
        <div className=' md:w-[200px]'>
       <p className='text-xl font-semibold'>Meet Out Experts</p>
       <p className='text-md text-gray-600'>The most dedicated healthcare providers in the US ready to meet your needs</p>
       </div>
        {Experts.map((data)=>(
            <div className='md:w-[250px]' key={data.id}>
            <img src={data.imageUrl} alt="" />
            <p className='font-semibold text-md mt-4'>{data.text}</p>
            </div>
        ))}
     
       </div>
    </>
  )
}

export default ExpertsSection