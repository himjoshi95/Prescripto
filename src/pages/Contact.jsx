import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
      <div>
      <h1 className='text-center text-xl  font-medium my-10 text-gray-700'>CONTACT <b>US</b></h1>
      
      <div className='flex flex-col md:flex-row gap-12 justify-center'>
        <div>
          <img className='w-full md:max-w-72' src={assets.contact_image} alt=""/>
        </div>
        <div className='flex flex-col gap-4 items-start justify-center'>
          <h1 className='font-bold  text-gray-700'>OUR OFFICE</h1>
          <div className='text-gray-500'>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className='text-gray-500'>
            <p>Tel: (415) 555‑0132</p>
            <p>Email: prescipto@gmail.com</p>
          </div>
          <h1 className='font-bold  text-gray-700'>CARRERS AT PRESCRIPTO</h1>
          <p className='text-gray-500'>
            Learn More obout our teams and job openings
          </p>
          <button className='border border-slate-500  px-8 py-2 text-sm text-gray-500 hover:bg-gray-800 hover:text-white hover:scale-105 transition-all duration-300'>Explore Jobs</button>

        </div>
      </div>
    </div>
  )
}

export default Contact