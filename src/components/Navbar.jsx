import React, { useState } from 'react'
import { MdOutlineClose,MdOutlineMenu } from "react-icons/md";

const Navbar = () => {

  const[nav,Setnav]=useState(false);

  const handleMenu = () => {
     Setnav(!nav)
  }




    const navData =[{
        id:1,
        title:"Home"
    },
    {
        id:2,
        title:"Company"
    },
    {
        id:3,
        title:"Resources"
    },
    {
        id:4,
        title:"About"
    },
    {
        id:5,
        title:"Contact"
    },
]


  return (
    <div className= 'text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tedx.Joy</h1>
      <ul className='hidden md:flex'>

        {navData.map((item)=>(
            <li  key={item.id} className='p-4'>{item.title}</li>
        ))}
      </ul>
      <div onClick={handleMenu} className=' md:hidden'>
        {!nav ? <MdOutlineClose size={20} />:  <MdOutlineMenu size={20} /> }
        
      </div>
      <div className= {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Tedx.Joy</h1>

      <ul className=' uppercase p-4'>
        {navData.map((item)=>(
            <li  key={item.id} className='p-4 border-b border-gray-600'>{item.title}</li>
        ))}
      </ul>
      </div>
    </div>

  )
}

export default Navbar
