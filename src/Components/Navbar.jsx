import React, { useState } from "react";
import kaatruLogo from "../assets/kaatru_logo.svg";
import Profile from "../assets/profile.svg";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/Features/DataSlice";

function Navbar() {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [isProfile,setIsProfile]=useState(false);
  const isUser=useSelector((state)=>state.data.isUser);
  const Logout=()=>{
    navigate('/');
    dispatch(setUser(false));
    sessionStorage.removeItem("persistantState");
    sessionStorage.removeItem('user');
  }
  return (
    <div className="w-full h-16 flex bg-[#323B4B] justify-between items-center fixed top-0 z-20">
      <img src={kaatruLogo} alt="" width={100} className="ml-4" />
      <p className="text-white text-xl flex mr-40 uppercase font-sans">
        Data Downloader
      </p>
      <div className="relative">
        {isUser && <img src={Profile} alt="" className="w-[50%] cursor-pointer" onClick={()=>setIsProfile(!isProfile)}/>}
        {isProfile && <div className="absolute z-[2100] top-[8vh] right-[1vw] w-[20vw] h-[35vh] bg-[#323B4B] rounded-lg flex flex-col justify-between p-4 items-center">
          <div className="flex flex-col justify-between items-center w-[100%]">
            <img src={Profile} alt="" className="w-[20%] cursor-pointer" />
            <p className="text-white mt-4">{"Monoharan"}</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] gap-4">
            <button className="text-black w-[90%] py-2 bg-white cursor-pointer rounded-md" onClick={()=>navigate('/history')}>History</button>
            <button className="text-white w-[90%] py-2 bg-[#E82327] cursor-pointer rounded-md" onClick={Logout}>Logout</button>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
