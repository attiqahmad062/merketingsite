import React from 'react'

const WhySection = () => {
    const WhyAttributes = [
        {
          id: 1,
         name:'qaulity',
         color:"#252a2f",
          desc: 'Our providers are licensed and certified. They have a reliable history of success and satisfaction with their clients. Quality care and associated services are our primary standard that is upheld by all providers in the platform.',
        },
        {
          id: 2,
          name: 'Privacy',
          color:"#8ae1d2",
          desc: 'We are a HIPAA compliant platform guided by private and confidential standard and procedures. Our system offers encrypted and secure channels of communication between you and your health care provider. Personal information is kept confidential and is not shared with any third party apart from you and your healthcare provider.',
        },
        {
          id: 3,
          name: 'Privacy',
          color:"#252a2f",
          desc: 'We are a HIPAA compliant platform guided by private and confidential standard and procedures. Our system offers encrypted and secure channels of communication between you and your health care provider. Personal information is kept confidential and is not shared with any third party apart from you and your healthcare provider.',
        },
        {
            id: 4,
            name: 'Privacy',
            desc: 'We are a HIPAA compliant platform guided by private and confidential standard and procedures. Our system offers encrypted and secure channels of communication between you and your health care provider. Personal information is kept confidential and is not shared with any third party apart from you and your healthcare provider.',
          },
         
         
         
      ];
  return (
    <div className='p-4'>
        <p className='font-semibold text-2xl text-center mb-6'>Why Amindset</p>
        <div className='md:flex md:gap-6 md:items-center rounded-sm md:justify-evenly'> 
        <div>
        {
        WhyAttributes.map((data)=>(
            <div className=' flex  gap-4'>
<div className={`flex-none w-10 h-10   bg-blue-500 rounded-full `}>
<p className='text-white  pt-2 flex items-center justify-center'>{data.id}</p>
</div>
<div className=' mb-6'>
<p className='font-semibold'>{data.name}</p>
<p>
{data.desc}
</p></div>
</div>
        ))}

</div>
      <img className="md:w-[600px] md:h-[500px]" src="https://amindset.co/sidemain.jpg" alt="" />

      
    </div>
    </div>
  )
}

export default WhySection