import React from 'react'

const Hero = () => {
    return (
        <div className="flex justify-center items-center p-2 px-5 sm:p-10 pt-20 sm:pt-32">
            <div className='flex flex-col sm:flex-row w-full justify-evenly'>
                <div className=" w-[100%] sm:w-[50%] flex sm:justify-center">
                    <div className=''>
                        <h1 className='text-xl sm:text-4xl font-semibold'><span className='text-6xl sm:text-8xl'>WELCOME</span> <br />TO NISARGA CARE</h1>
                        <ul className='text-sm font-semibold my-10'>
                            <li className="list-disc">Take the World's Best
                                Quality Treatment</li>
                            <li className="list-disc">Home Nurshing Service</li>
                            <li className="list-disc">Nurshing Care Good Rehabilitation Center</li>
                        </ul>
                        <button className='bg-cyan-500 text-cyan-50 p-2  px-4 rounded-full mb-5'>Contact Us</button>
                    </div>
                </div>
                <div className='relative flex flex-col sm:flex-row w-[50%]'>
                    <div className='w-[270px] sm:w-[380px]'>
                        <img
                            className=''
                            src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="" />
                    </div>
                    <div className='w-[270px] sm:w-[380px] border-2 border-white absolute left-28 sm:left-52 -bottom-16'>
                        <img
                            className=''
                            src="https://images.unsplash.com/photo-1587556930720-58ec521056a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero