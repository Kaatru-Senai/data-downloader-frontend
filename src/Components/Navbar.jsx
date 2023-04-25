import React from 'react'
import kaatruLogo from '../assets/kaatru_logo.png'

function Navbar() {
  return (
    <div className='w-full h-16 flex bg-black justify-between items-center'>
       <img src={kaatruLogo} alt="" width={100} className='ml-4'/>
       <p className='text-white text-3xl font-sans flex mr-40'>Data Downloader</p>
       <div className=""></div>
    </div>
  )
}

export default Navbar