import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {MdDevicesOther} from 'react-icons/md'
import {SlBookOpen} from 'react-icons/sl'

const Footer = () => {
  return (

    <div className=' w-full grid grid-cols-3 gap-5' >
      <div className='ml-12'><BsCalendarDate className='cursor-pointer' size={40} color='orange'/><p className='font-bold text-2xl mt-2'>Daily Workouts 7 Days a Week</p>
      <p className='mt-2 text-gray-500'>Get personalized workouts on a daily basis.</p>
       <p className=' text-gray-500'> from professionals.</p></div>
      <div className=''><MdDevicesOther className='cursor-pointer' size={40} color='red'/><p className='font-bold text-2xl mt-2'>Access From Any Platform</p>
      <p className='mt-2 text-gray-500'>Use all the benefits of the service anywhere </p>
       <p className=' text-gray-500'> and on any device.</p></div>
      <div className=''><SlBookOpen className='cursor-pointer' size={40} color='blue'/><p className='font-bold text-2xl mt-2'>Guides & Community</p>
      <p className='mt-2 text-gray-500'>A private community where we help</p>
       <p className=' text-gray-500'>each other.</p></div>
    </div>
  )
}

export default Footer