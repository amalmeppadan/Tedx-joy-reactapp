import React from 'react'
import { 
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitter

 } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1024px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tedx.Joy</h1>
            <p className='py-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quas,
                 fugiat ab quasi non doloremque libero sapiente aperiam amet eum dolorem,
                 a impedit repudiandae officiis, excepturi iure ipsam quia veritatis.</p>
                 <div className='flex justify-between md:w-[75%] my-6 '>
                    <FaDribbbleSquare size={30} />
                    <FaFacebookSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitter size={30} />
                 </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Anaylitcs</li>
                    <li className='py-2 text-sm'>Marketting</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                  
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
