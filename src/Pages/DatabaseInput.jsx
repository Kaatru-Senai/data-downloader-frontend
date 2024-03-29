/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import DatabaseIcon from "../assets/database.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDBName } from "../redux/Features/DataSlice";

function DatabaseInput() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const databaseName=useRef();
  const options = [
    'one', 'two', 'three'
  ];    
  console.log(databaseName)
  const [Option,SetOption] = useState(options[0]);
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
      <div className="w-screen flex-auto flex flex-row items-center justify-center mb-[10%] mt-[3%]">
        <div className="basis-[10%] text-center"></div>
        <div className="basis-4/5 flex-auto flex flex-row justify-start items-center gap-8 ml-[10%]">
          <label htmlFor="" className="font-semibold">
            Database Name :-
          </label>
          <div className="w-[20vw] flex flex-row justify-center items-center border-2 pl-2 rounded-lg bg-[#eeeeee]">
            <img src={DatabaseIcon} alt="" width={"20vmin"} />
            <div className="w-[2px] h-8 bg-stone-500 ml-4"></div>
            <Dropdown options={options} onChange={SetOption} value={Option} placeholder="Select an option" className="flex-auto"/>
          </div>
        </div>
      </div>
      
      <div className="w-[80%] fixed bottom-4 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg" onClick={()=>navigate('/select-datatype')}>
          Back
        </button>
        <button className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg" onClick={()=>{navigate('/download');dispatch(setDBName(Option.value))}}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default DatabaseInput;
