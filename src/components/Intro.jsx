import React from 'react'

const Intro = () => {
    return (
        <div className='p-6 sm:p-10 pt-40 flex flex-col sm:flex-row items-center justify-evenly '>
            <p className='sm:rotate-90 text-gray-100 text-5xl font-extrabold sm:w-[20%]'>WHO WE ARE</p>
            <div className="sm:hidden w-[100%] mb-10">
                <span>Since</span>
                <p className='text-7xl text-center font-semibold'>32 Years</p>
            </div>
            {/* left container */}
            <div className="w-[100%] sm:w-[50%]">
                <h1 className=' bg-blue-500 w-[25%] sm:w-[15%] text-gray-200 px-1'>Who we are</h1>
                <p className="font-semibold text-2xl sm:text-4xl">WE HAVE 24/7 NURSING CARE GOOD REHABILITATION CENTER</p>
                <div>
                    <p className='my-7'>Nisarga care HOME NURSING SERVICE , ALSO WE HAVE 24/7 NURSING CARE GOOD REHABILITATION CENTER WITH HYGIENIC GERIATRIC CARE FACILITY</p>
                    <ul>
                        <li className='list-disc'>Routine and medical care</li>
                        <li className='list-disc'>Excellence in Healthcare every</li>
                        <li className='list-disc'>Building a healthy environment</li>
                        <li className='list-disc'>Routine and medical care</li>
                        <li className='list-disc'>Excellence in Healthcare every</li>
                        <li className='list-disc'>Building a healthy environment</li>
                    </ul>
                </div>
            </div>

            {/* right container */}
            <div className="hidden sm:block w-[30%]">
                <span>Since</span>
                <p className='text-7xl font-semibold'>32 Years</p>
            </div>
        </div>
    )
}

export default Intro