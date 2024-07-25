import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <img className='w-[500px] mx-auto my-4' src={laptop} alt="" />
         <div className='flex flex-col justify-center'>
            <p className='text-[#00dfd9] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quos consectetur
                similique qui, dignissimos nam at sunt sed maxime natus! Veniam voluptates neque molestias non,
                officiis dolorum fuga numquam. Rem.</p>
            <button className='bg-black text-[#00dfd9]  rounded-md w-[200px] mx-auto md:mx-0 my-6 py-3 font-medium cursor-pointer'>Get Started</button>
         </div>

        </div>
    </div>
  )
}

export default Analytics
