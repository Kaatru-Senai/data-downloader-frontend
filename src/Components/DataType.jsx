import React, { useState } from "react";
import Plus from "../assets/Vector (1).svg";
import Search from "../assets/Search_request.png";
import DeviceData from "../assets/Squ.png";
import Satelitte from "../assets/st.png";
import GroundStation from "../assets/gst.png";

function DataType() {
  const [deviceActive,setDeviceActive]=useState(false)
  const [satelliteActive,setSatelliteActive]=useState(false)
  const [groundStationActive,setGroundStationActive]=useState(false)
  return (
    <>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select a Request</p>
        </div>
      </div>
      <div className="w-[65vw] h-[45vh] flex justify-center items-center ml-[20%] mr-[20%] mt-[2%]">
        <div className="bg-[#F1F6FF] w-[80%] h-full flex flex-row justify-center items-center flex-auto rounded-lg pl-[5%] pr-[5%] pb-8 pt-8 gap-10" >
          <div className={`${deviceActive?"bg-[#323B4B]":"bg-white"} relative h-full basis-1/3 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg`} onClick={()=>{setDeviceActive(true);setGroundStationActive(false);setSatelliteActive(false)}}>
            <div className="w-auto p-4 rounded-[50%] border-2 bg-[#F3F3F3]">
              <img src={DeviceData} alt="" width={"40vmin"} />
            </div>
            <p className={`text-center font-semibold ${deviceActive?"text-white":"text-[#323B4B]"}`}>
              Device <br></br> Data
            </p>
            {deviceActive && <div className="absolute top-4 right-4 w-4 h-4 rounded-[50%] bg-green-400">
            </div>}
          </div>
          <div className={`${satelliteActive?"bg-[#323B4B]":"bg-white"} relative h-full basis-1/3 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg`} onClick={()=>{setDeviceActive(false);setGroundStationActive(false);setSatelliteActive(true)}}>
          <div className="w-auto p-4 rounded-[50%] border-2 bg-[#F3F3F3]">
              <img src={Satelitte} alt="" width={"40vmin"} />
            </div>
            <p className={`text-center font-semibold ${satelliteActive?"text-white":"text-[#323B4B]"}`}>
              Satellite <br></br> Data
            </p>
            {satelliteActive && <div className="absolute top-4 right-4 w-4 h-4 rounded-[50%] bg-green-400">
            </div>}
          </div>
          <div className={`${groundStationActive?"bg-[#323B4B]":"bg-white"} relative h-full basis-1/3 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg`} onClick={()=>{setDeviceActive(false);setGroundStationActive(true);setSatelliteActive(false)}}>
          <div className="w-auto p-4 rounded-[50%] border-2 bg-[#F3F3F3]">
              <img src={GroundStation} alt="" width={"40vmin"} />
            </div>
            <p className={`text-center font-semibold ${groundStationActive?"text-white":"text-[#323B4B]"}`}>
              Ground <br></br> Station Data
            </p>
            {groundStationActive && <div className="absolute top-4 right-4 w-4 h-4 rounded-[50%] bg-green-400">
            </div>}
          </div>
        </div>
      </div>
      <div className="flex w-[80vw] justify-end mt-[2%]">
        <button className="bg-[#323B4B] px-6 py-2 text-white rounded-lg font-semibold">Continue</button>
      </div>
    </>
  );
}

export default DataType;
