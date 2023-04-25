import React from 'react'
import Navbar from '../Components/Navbar'
import ProgressBar from '../Components/Progress_bar/ProgressBar'

function RequestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <ProgressBar/>
    </div>
  )
}

export default RequestPage