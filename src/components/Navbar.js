import React from 'react'
import {RiMenu2Fill} from 'react-icons/ri'
const Navbar = () => {
  return (
    <div  className='flex pt-8'>
        <div className=' pl-5 '>
        <RiMenu2Fill classname='' fontSize={30} ></RiMenu2Fill></div>
        <div className='flex md:flex md:flex-grow flex-row-reverse space-x-1 pr-6'>
        <button className='px-[30px] text-xl text-gray-500 hover:underline'> Community</button>
        <button className='px-[30px] text-xl text-gray-500 hover:underline'> Nutrition Plans</button>
        <button className='px-[30px] text-xl text-gray-500 hover:underline' >Workouts&Programs</button>
        </div>
        </div>
  )
}

export default Navbar
