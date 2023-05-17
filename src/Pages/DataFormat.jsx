import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import { useDispatch } from "react-redux";
import { setDataFormat } from "../redux/Features/DataSlice";


function DataFormat() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [jsonDataType,setJsonDataType]=useState(true);
  const [csvDataType,setCsvDataType]=useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center">
    <Navbar/>
    <ProgressBar/>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select a Data Format</p>
        </div>
      </div>
      <div className="w-[65vw] h-[35vh] flex justify-center items-center ml-[20%] mr-[20%] mt-[2%]">
        <div className="bg-[#F1F6FF] w-[80%] h-full flex flex-row justify-center items-center flex-auto rounded-lg pl-[5%] pr-[5%] pb-8 pt-8 gap-10">
          <div className="basis-1/2 flex justify-center items-center">
            <button className={`w-full h-auto ${jsonDataType?"bg-[#323B4B] text-white":"bg-[#dfdfdf] text-[#8D8D8D]"} py-4 font-semibold rounded-lg`} onClick={()=>{setJsonDataType(true);setCsvDataType(false);dispatch(setDataFormat("JSON"))}}>
              JSON
            </button>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <button className={`w-full h-auto ${csvDataType?"bg-[#323B4B] text-white":"bg-[#dfdfdf] text-[#8D8D8D]"} py-4 font-semibold rounded-lg`} onClick={()=>{setJsonDataType(false);setCsvDataType(true);dispatch(setDataFormat("CSV"))}}>
              CSV
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg" onClick={()=>navigate('/select-devices')}>
          Back
        </button>
        <button className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg" onClick={()=>{
            navigate('/download');
        }}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default DataFormat;
