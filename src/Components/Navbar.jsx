import React from 'react'
import kaatruLogo from '../assets/kaatru_logo.png'

function Navbar() {
  return (
    <div className='w-full h-16 flex bg-[#323B4B] justify-between items-center fixed top-0 z-20'>
       <img src={kaatruLogo} alt="" width={100} className='ml-4'/>
       <p className='text-white text-2xl font-sans flex mr-40'>Data Downloader</p>
       <div className=""></div>
    </div>
  )
}

export default Navbar