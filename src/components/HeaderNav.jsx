import React, { useState } from 'react'
import { FcMenu } from 'react-icons/fc'

const HeaderNav = ({setShowMenu}) => {
    

    return (
        <div className='relative flex items-center justify-between p-2 px-4'>
            <div className='w-[30%]'>
                <img src="nisargacare.png" alt="nisargacare" className='w-[100%] sm:w-[80%] sm:h-[5%]' />
            </div>
            <div className=' w-[100%] hidden sm:block'>
                <ul className='flex justify-around'>
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About Us</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Career | Job</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Payment</li>
                    <li className="cursor-pointer">FAQ</li>
                    <li className="cursor-pointer">Gallery</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div className='sm:hidden'>
                <FcMenu className='text-2xl' onClick={() => setShowMenu(true)} />
            </div>
            
        </div>
    )
}

export default HeaderNav