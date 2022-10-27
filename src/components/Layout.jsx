import React, { useState} from 'react'
import HeaderNav from './HeaderNav'
import { MdClose } from 'react-icons/md'


const Layout = ({children}) => {
    const [ showMenu, setShowMenu]= useState(false)

  return (
    <div className='relative'>
        {showMenu === true && (
                <div className='absolute right-0 z-50 w-[70%] h-[100vh] pt-10 p-4 bg-gray-700'>
                    <MdClose onClick={() => setShowMenu(false)} className='text-white text-right' />
                    <ul className='text-gray-50'>
                    <li className="cursor-pointer underline w-full mt-5">Home</li>
                    <li className="cursor-pointer underline w-full mt-5">About Us</li>
                    <li className="cursor-pointer underline w-full mt-5">Services</li>
                    <li className="cursor-pointer underline w-full mt-5">Career | Job</li>
                    <li className="cursor-pointer underline w-full mt-5">Blog</li>
                    <li className="cursor-pointer underline w-full mt-5">Payment</li>
                    <li className="cursor-pointer underline w-full mt-5">FAQ</li>
                    <li className="cursor-pointer underline w-full mt-5">Gallery</li>
                    <li className="cursor-pointer underline w-full mt-5">Contact Us</li>
                </ul>
                </div>
            )}
        <HeaderNav setShowMenu={setShowMenu} />
        {children}
    </div>
  )
}

export default Layout