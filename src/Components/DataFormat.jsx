import React, { useState } from "react";
import Plus from "../assets/Vector (1).svg";
import Search from "../assets/Search_request.png";
import DeviceData from "../assets/Squ.png";
import Satelitte from "../assets/st.png";
import GroundStation from "../assets/gst.png";
import DatabaseIcon from "../assets/database.svg";

function DataFormat() {
  //   const [deviceActive, setDeviceActive] = useState(false);
  //   const [satelliteActive, setSatelliteActive] = useState(false);
  //   const [groundStationActive, setGroundStationActive] = useState(false);
  return (
    <>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select a Data Format</p>
        </div>
      </div>
      {/* <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center"></div>
        <div className="basis-4/5 flex-auto flex flex-row justify-start items-center gap-8">
          <label htmlFor="" className="font-semibold">
            Database Name :-
          </label>
          <div className="flex flex-row justify-center items-center border-2 pl-2 rounded-lg">
            <img src={DatabaseIcon} alt="" width={"20vmin"} />
            <div className="h-full w-4 bg-black"></div>
            <input type="text" name="" id="" className="p-2 focus:outline-0" />
          </div>
        </div>
      </div> */}
      <div className="w-[65vw] h-[35vh] flex justify-center items-center ml-[20%] mr-[20%] mt-[2%]">
        <div className="bg-[#F1F6FF] w-[80%] h-full flex flex-row justify-center items-center flex-auto rounded-lg pl-[5%] pr-[5%] pb-8 pt-8 gap-10">
          <div className="basis-1/2 flex justify-center items-center">
            <button className="w-full h-auto bg-[#323B4B] py-4 text-white font-semibold rounded-lg">
              JSON
            </button>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <button className="w-full h-auto bg-[#DFDFDF] py-4 text-[#8D8D8D] font-semibold rounded-lg">
              CSV
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg">
          Back
        </button>
        <button className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg">
          Continue
        </button>
      </div>
    </>
  );
}

export default DataFormat;
