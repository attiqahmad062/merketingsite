import React from 'react'

const ServicesSection = () => {
    const services = [
        {
          id: 1,
          imageUrl: 'https://amindset.co/specs/1.png',
          text: 'Confidence Building',
        },
        {
          id: 2,
          imageUrl: 'https://amindset.co/specs/1.png',
          text: 'Confidence Building',
        },
        {
          id: 3,
          imageUrl: 'https://amindset.co/specs/emotions.png',
          text: 'Confidence Building',
        },
        {
            id: 4,
            imageUrl: 'https://amindset.co/specs/3.png',
            text: 'Brief Therapy',
          },
          {
            id: 5,
            imageUrl: 'https://amindset.co/specs/2.png',
            text: 'Anxiety',
          },
         
         
      ];
  return (
    <div className='p-6 flex flex-wrap md:gap-20 items-center justify-center '>
        
        {
            services.map((service)=>(
                <div className='w-[150px] mt-6 md:w-[200px] space-y-4 flex items-center justify-center flex-col' key={service.id}>
                    <img className="h-[100px]  " src={service.imageUrl} alt="" />
                    <p className='text-sm md:text-md '>{service.text}</p>
                </div>
            ))
        }

    </div>
  )
}

export default ServicesSection