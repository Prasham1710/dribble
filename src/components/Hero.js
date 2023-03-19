import React from 'react'
import Gym from '../assets/gym.png'
const Hero = () => {
  return (
    <div className='flex w-screen'>
        <div className='pt-20 pb-9 pl-9'>
            <p className='text-8xl font-bold' > It's Time to
            <p></p>Regain your <p></p>Fitness </p>
            <p className='text-4xl text-gray-400 pt-10'> Do fitness anywhere and anytime <p>
                </p>with our training videos</p>
                <button className='bg-rose-600 
            text-white  text-xl rounded-xl pt-4 pb-3 border w-[45%] relative my-5 py-1  hover:bg-indigo-500' > Try It For Free </button>
            
        </div>
        
        <div className=' flex md:flex md:flex-grow flex-row-reverse space-x-1 pr-5' >
            < img className='w-[75%] h-[90%]' src={Gym}></img>
        </div>
        
    </div>
  )
}

export default Hero