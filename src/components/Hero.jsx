import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
           <p className='text-[#00dfd9] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
           <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
           <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast flexible financig for</p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4  pl-2' strings={['BTP','BTC','SAAS']}  typeSpeed={40} backSpeed={50} loop />
           </div>
           <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC, & SAAS platforms.</p>
           <button className='bg-[#00dfd9] rounded-md w-[200px] mx-auto my-6 py-3 font-medium cursor-pointer text-black'>Get started</button>
        </div>
      
    </div>
  )
}

export default Hero
