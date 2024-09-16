import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
      <div>
      <h1 className='text-center text-xl font-medium my-6 text-gray-700'>ABOUT <b>US</b></h1>
      
      <div className=' flex flex-col md:flex-row gap-4'>
        {/* LEFT SIDE */}
        <div>
            <img className='w-full md:max-w-72' src={assets.about_image} alt="" />      
        </div>

        {/* RIGHT SIDE */}
        <div className='flex-1 flex flex-col gap-4 text-sm text-gray-500 md:px-10 leading-5'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <h1 className='font-bold text-gray-700'>Our Vision</h1>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      <div>
        <h1 className='my-10  text-gray-700'>WHY <b>CHOOSE US</b></h1>
        <div className='flex flex-col md:flex-row'>
            <div className='border border-gray-400 md:max-w-sm p-8 w-full md:hover:cursor-pointer md:hover:scale-105 md:hover:mx-3 md:hover:bg-primary md:hover:text-white transition-all duration-300'>
                <h1 className='font-bold mb-5'>EFFICIENCY</h1>
                <p className='text-xs font-medium   md:hover:text-white'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>            
            </div>
          
            <div className='border border-gray-400 md:max-w-sm p-8 w-full md:hover:cursor-pointer md:hover:bg-primary md:hover:scale-105 md:hover:mx-3 md:hover:text-white transition-all duration-300'>
                <h1 className='font-bold mb-5'>CONVINIENCE</h1>
                <p className='text-xs font-medium   md:hover:text-white'>Access to a network of trusted healthcare professionals in your area.</p>            
            </div>
          
            <div className='border border-gray-400 md:max-w-sm p-8 w-full md:hover:cursor-pointer md:hover:bg-primary md:hover:scale-105 md:hover:mx-3 md:hover:text-white transition-all duration-300'>
              <h1 className='font-bold mb-5'>PERSONALIZATION</h1>
              <p className='text-xs font-medium   md:hover:text-white'>Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default About