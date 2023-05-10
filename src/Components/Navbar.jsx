import React from 'react'
import kaatruLogo from '../assets/kaatru_logo.png';
import Profile from '../assets/profile.svg';


function Navbar() {
  return (
    <div className='w-full h-16 flex bg-[#323B4B] justify-between items-center fixed top-0 z-20'>
       <img src={kaatruLogo} alt="" width={100} className='ml-4'/>
       <p className='text-white text-2xl flex mr-40 uppercase font-sans'>Data Downloader</p>
       <div className="">
        <img src={Profile} alt="" className='w-[50%] cursor-pointer'/>
       </div>
    </div>
  )
}

export default Navbar