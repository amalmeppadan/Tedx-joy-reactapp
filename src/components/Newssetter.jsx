import React from 'react'

const Newssetter = () => {
  return (
    <div className='w-full py-16 text-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4' >
           <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2'>Wants tips & tricks to optimize your flow?</h1>
           <p>Signup to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 w-full rounded-md  text-black' type="email" placeholder='Enter email'  />
                    <button className='bg-[#00dfd9] rounded-md w-[200px] mx-auto my-6 py-3 font-medium cursor-pointer text-black ml-4 px-6'>Notify me</button>
                </div>
                <p>We are care about the protrction of your data.Read our <span className='text-[#00dfd9] '>privacy policy</span> </p>
            </div>
            

        </div>
      
    </div>
  )
}

export default Newssetter
