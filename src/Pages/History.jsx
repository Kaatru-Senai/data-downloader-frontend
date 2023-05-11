import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

function History() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center">
    <Navbar/>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-32">
        <div className="basis-[10%] text-center"></div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">History</p>
        </div>
      </div>
      <div className="w-screen h-[50vh] flex-auto flex flex-row items-start justify-center ml-[0%] mt-[1%]">
        <div className="basis-[10%] text-center h-full"></div>
        <div className="flex-auto mr-[2%] h-[80%] text-black overflow-auto">
            <table className='w-full rounded-lg overflow-hidden'>
                    <tr className='sticky top-0 bg-[#323B4B] text-white h-[10vh] rounded-lg'>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>JOB-ID</th>
                        <th>Created On</th>
                        <th>Status</th>
                    </tr>
                    <tr className='h-[10vh] bg-slate-200 border-b-2 border-black'>
                        <td className='text-center'>1</td>
                        <td className='text-center'>collocation study</td>
                        <td className='text-center'>{"#234"}</td>
                        <td className='text-center'>11/05/2023</td>
                        <td className='text-center'><div className='w-full flex justify-center items-center'><p className='w-[40%] font-bold px-2 py-1 rounded-lg bg-[#19b40b] text-white'>Success</p></div></td>
                    </tr>
                    <tr className='h-[10vh] bg-slate-200 border-b-2 border-black'>
                        <td className='text-center'>1</td>
                        <td className='text-center'>collocation study</td>
                        <td className='text-center'>{"#234"}</td>
                        <td className='text-center'>11/05/2023</td>
                        <td className='text-center'><div className='w-full flex justify-center items-center'><p className='w-[40%] font-bold px-2 py-1 rounded-lg bg-[#ff1515] text-white'>Failed</p></div></td>
                    </tr>
                    <tr className='h-[10vh] bg-slate-200 border-b-2 border-black'>
                        <td className='text-center'>1</td>
                        <td className='text-center'>collocation study</td>
                        <td className='text-center'>{"#234"}</td>
                        <td className='text-center'>11/05/2023</td>
                        <td className='text-center'><div className='w-full flex justify-center items-center'><p className='w-[40%] font-bold px-2 py-1 rounded-lg bg-[#19b40b] text-white'>Success</p></div></td>
                    </tr>
                    <tr className='h-[10vh] bg-slate-200 border-b-2 border-black'>
                        <td className='text-center'>1</td>
                        <td className='text-center'>collocation study</td>
                        <td className='text-center'>{"#234"}</td>
                        <td className='text-center'>11/05/2023</td>
                        <td className='text-center'><div className='w-full flex justify-center items-center'><p className='w-[40%] font-bold px-2 py-1 rounded-lg bg-[#ff1515] text-white'>Failed</p></div></td>
                    </tr>
                    <tr className='h-[10vh] bg-slate-200 border-b-2 border-black'>
                        <td className='text-center'>1</td>
                        <td className='text-center'>collocation study</td>
                        <td className='text-center'>{"#234"}</td>
                        <td className='text-center'>11/05/2023</td>
                        <td className='text-center'><div className='w-full flex justify-center items-center'><p className='w-[40%] font-bold px-2 py-1 rounded-lg bg-[#19b40b] text-white'>Success</p></div></td>
                    </tr>
                    <tr className='h-[10vh] bg-slate-200 border-b-2 border-black'>
                        <td className='text-center'>1</td>
                        <td className='text-center'>collocation study</td>
                        <td className='text-center'>{"#234"}</td>
                        <td className='text-center'>11/05/2023</td>
                        <td className='text-center'><div className='w-full flex justify-center items-center'><p className='w-[40%] font-bold px-2 py-1 rounded-lg bg-[#ff1515] text-white'>Failed</p></div></td>
                    </tr>
            </table>
        </div>
      </div>
      <div className="w-[80%] fixed bottom-1 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg" onClick={()=>navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default History