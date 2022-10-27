import React from 'react'
import { MdAdd } from 'react-icons/md'

const Services = () => {
    return (
        <div className="mt-20 mb-10 p-6 sm:p-10 sm:px-20">
            {/* service list */}
            <h1 className=' bg-blue-500 w-[30%] text-sm sm:w-[10%] text-gray-200 px-1'>Our Services</h1>
            <p className="font-semibold text-2xl sm:text-4xl uppercase">What We Offer for You</p>
            <div className="flex gap-x-1 flex-wrap my-7">
                <p className='p-2 my-1 rounded-full bg-gray-300 text-gray-800'>nursing and palliative care</p>
                <p className='p-2 my-1 rounded-full bg-gray-300 text-gray-800'>nursing jobs</p>
                <p className='p-2 my-1 rounded-full bg-gray-300 text-gray-800'>nursing care and residential care homes</p>
                <p className='p-2 my-1 rounded-full bg-gray-300 text-gray-800'>senior citizen home care services</p>
                <p className='p-2 my-1 rounded-full bg-gray-300 text-gray-800'>Rehabilitation Service for senior citizens</p>
                <p className='p-2 my-1 rounded-full bg-gray-300 text-gray-600 flex items-center gap-x-1'><MdAdd /> More</p>
            </div>

            <div className="flex justify-center items-center w-[100%]">
                <div className="flex justify-evenly flex-wrap gap-4 w-[100%]">
                    <div className="w-[140px]">
                        <p className="text-2xl font-bold">100</p>
                        <p className="text-gray-600">Dedicated Doctors</p>
                    </div>

                    <div className="w-[140px]">
                        <p className="text-2xl font-bold">150</p>
                        <p className="text-gray-600">Clinic Rooms</p>
                    </div>

                    <div className="w-[140px]">
                        <p className="text-2xl font-bold">250</p>
                        <p className="text-gray-600">Awards</p>
                    </div>

                    <div className="w-[140px]">
                        <p className="text-2xl font-bold">1500</p>
                        <p className="text-gray-600">Happy Clients</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services