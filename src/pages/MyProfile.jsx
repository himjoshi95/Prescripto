import React, { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardson@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1 :'57th Cross, Richmond ',
      line2 :'Circle, Church Road, London'
    },
    gender: 'Male',
    dob:'2000-01-20'
  })
  const [isEdit, setIsEdit] = useState(false)

  return (
      <div>
        <div className='flex gap-4'>
          <img className='w-28 h-28 rounded' src={userData.image}/>
          {/* <img className='w-28 h-28' src={assets.upload_area}/>           */}
        </div>
      <div className='my-4 w-1/2'>
        {
          isEdit
            ?
            <input type="text" className='bg-blue-50 text-xl border border-gray-400   rounded'
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              value={userData.name} />
            
            :
            <h1 className='text-xl font-medium border-b border-gray-200'>{userData.name}</h1>
        }
        </div>
        <h1 className='text-xs uppercase text-gray-500 underline pb-4'>Contact Information</h1>
        <div className='flex gap-6 text-gray-500 text-sm'>
          <div className='flex flex-col gap-4'>
            <p>Email id:</p>
            <p>Phone:</p>
            <p>Address:</p>
          </div>
          <div className='flex flex-col gap-4'>
          <p className='text-primary'>{userData.email}</p>
          {
          isEdit
            ?
            <input type="text" className='bg-blue-50 border border-gray-400  rounded'
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              value={userData.phone} />
            :
            <p className='text-primary'>{userData.phone}</p>            
          }
          {
          isEdit
              ?
              <div className='flex flex-col'>
              <input type="text" className='bg-blue-50 border border-gray-400  rounded'
                  onChange={e => setUserData(prev => ({ ...prev, address : {...prev.address, line1:e.target.value} }))}
              value={userData.address.line1} />
              <input type="text" className=' bg-blue-50 border border-gray-400  rounded'
              onChange={e => setUserData(prev => ({ ...prev, address: {...prev.address, line2:e.target.value} }))}
              value={userData.address.line2} />              
              </div>
            :
            <p>{userData.address.line1} <br/>
            {userData.address.line2}</p>
                        
          }
          </div>
        </div>
        <h1 className='text-xs uppercase text-gray-500 underline py-4'>Basic Information</h1>
        <div className='flex gap-6 text-gray-500 text-sm'>
          <div className='flex flex-col gap-4'>
            <p>Gender:</p>
            <p>Birthday:</p>
           
          </div>
        <div className='flex flex-col gap-4 w-48'>
        {
          isEdit
            ?
            <select className='bg-blue-50 border border-gray-400 rounded '
              onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                value={userData.gender} >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            :
            <p>{userData.gender}</p>                       
          }
         {
          isEdit
            ?
            <input type="date" className='bg-blue-50 border border-gray-400  rounded'
              onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              value={userData.dob} />
            :
            <p>{userData.dob}</p>                                 
          }
          </div>
        </div>
      <div className='py-6 flex gap-6'>
        {
          isEdit
            ?
            <button className='border border-primary px-4 py-2 rounded-full text-gray-500 hover:bg-primary hover:text-white transition-all'
              onClick={() => setIsEdit(false)}>Save Information</button>
            :
            <button className='border border-primary px-8 py-2 rounded-full text-gray-500 hover:bg-primary hover:text-white transition-all'
              onClick={() => setIsEdit(true)}>Edit</button>
        }
        </div>
      
    </div>
  )
}

export default MyProfile