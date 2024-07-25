import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
//   const userData=[ 
//     {
//       id:1,
//        title:"Single User",
//        money :149,
//        storage:"500 GB Storage",
//        person:"1 User allowed",
//        sending:"Send upto 2 GB"

//   },
//   {
//     id:2,
//     title:"Partnership",
//     money :199,
//     storage:"1 TB Storage",
//     person:"3 Users allowed",
//     sending:"Send upto 10 GB"

// },
// {
//   id:3,
//   title:"Group Account",
//   money :299,
//   storage:"5 TB Storage",
//   person:"10 User allowed",
//   sending:"Send upto 20 GB"

// },
// ]
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1024px] mx-auto grid  md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8 '>storage:500 GB Storage</p>
              <p className='py-2 border-b mx-8 '>1 Granted User</p>
              <p className='py-2 border-b mx-8 '>Send upto 2 GB</p>
            </div>
            <button className='bg-[#00dfd9] rounded-md w-[200px] mx-auto my-6 py-3 font-medium cursor-pointer text-black'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8  rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto bg-transparent mt-[-3rem] bg-white' src={double} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-4xl font-bold'>$199</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8 '>1 TB Storage</p>
              <p className='py-2 border-b mx-8 '>3 Users allowed</p>
              <p className='py-2 border-b mx-8 '>Send upto 10 GB</p>
            </div>
            <button className='bg-black rounded-md w-[200px] mx-auto my-6 py-3 font-medium cursor-pointer text-[#00dfd9]'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-4xl font-bold'>$299</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8 '>5 TB Storage</p>
              <p className='py-2 border-b mx-8 '>10 User allowed</p>
              <p className='py-2 border-b mx-8 '>Send upto 20 GB</p>
            </div>
            <button className='bg-[#00dfd9] rounded-md w-[200px] mx-auto my-6 py-3 font-medium cursor-pointer text-black'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
