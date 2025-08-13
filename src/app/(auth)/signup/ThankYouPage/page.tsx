import { AppWindow, ArrowRight, Home, LucideAppWindowMac } from 'lucide-react'
import React from 'react'
import { RiWindow2Fill, RiWindowFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-between min-w-[50%] gap-50 bg-violet-600 rounded-4xl px-4 py-1 mx-auto mt-6'>
            <img src="/navipreplogo.svg" alt="" className='h-15'/>
            <button className='flex border border-white items-center justify-center text-xl gap-3 px-5 rounded-4xl text-white h-12 my-auto'>
                <img src="/window.svg" alt="" />
                login
            </button>
        </div >
        <div className='flex gap-2  mx-auto items-center text-xl border border-gray-300 rounded-4xl  p-3 mt-10'>
            <button>🎉 Awesome Sauce!</button>
            <ArrowRight />
        </div>
        <div className='flex flex-col items-center p-5 mt-8 gap-9'>
            <h2 className='text-5xl font-bold text-gray-400'>
                Thanks for <span className='text-violet-600'>Joining!</span> 
            </h2>
            <p className='text-xl text-gray-400'>
                You are the most amazing person! Thank you for joining the Waitlist
            </p>
        </div>
        <div className='flex gap-3 bg-violet-600 rounded-3xl px-5 py-2 text-white mt-10'>
            <Home color='white'/>
            <p>
                Back to home
            </p>
        </div>
      
    </div>
  )
}

export default page
