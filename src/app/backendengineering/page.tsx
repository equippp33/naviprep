import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between p-5'>
      <div className='flex items-center gap-2 p-2 bg-gray-100 w-fit rounded-2xl '>
        <img src="/avatar.svg" alt="" className='h-10' />
        <h2 className='font-bold'>Back-end Engineering</h2>
      </div>
      <div className='flex flex-col justify-center max-w-[50%] mx-auto p-5 '>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto h-100 w-100 rounded-xl duration-500 "
        >
          <source src="/f13.mp4" type="video/mp4" />
        </video>
        <button className='bg-violet-600 px-5 p-1 text-xl rounded-2xl w-fit mx-auto text-white'>
            <a href="backendengineering/startinterview">start</a>
        </button>
      </div>
      <div className='flex justify-between text-blue-600'>
        <p>
            Note: Please do not refresh the page or you’ll lose the data.
        </p>
        <p>
            Powered by EQUIPPP 3.0 Labs
        </p>
      </div>
    </div>
  )
}

export default page
