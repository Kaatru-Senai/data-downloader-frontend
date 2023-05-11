/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DeviceData from "../assets/Squ.png";
import Satelitte from "../assets/st.png";
import GroundStation from "../assets/gst.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";

function DataSource() {
  const navigate = useNavigate();
  const [deviceActive, setDeviceActive] = useState(false);
  const [satelliteActive, setSatelliteActive] = useState(false);
  const [groundStationActive, setGroundStationActive] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center">
    <Navbar />
    <ProgressBar/>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select a Data Source</p>
        </div>
      </div>
      <div className="w-[65vw] h-[45vh] flex justify-center items-center ml-[20%] mr-[20%] mt-[2%]">
        <div className="bg-[#F1F6FF] w-[80%] h-full flex flex-row justify-center items-center flex-auto rounded-lg pl-[5%] pr-[5%] pb-8 pt-8 gap-10">
          <div
            className={`${
              deviceActive ? "bg-[#323B4B]" : "bg-white"
            } relative h-full basis-1/3 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg`}
            onClick={() => {
              setDeviceActive(true);
              setGroundStationActive(false);
              setSatelliteActive(false);
            }}
          >
            <div className="w-auto p-4 rounded-[50%] border-2 bg-[#F3F3F3]">
              <img src={DeviceData} alt="" width={"40vmin"} />
            </div>
            <p
              className={`text-center font-semibold ${
                deviceActive ? "text-white" : "text-[#323B4B]"
              }`}
            >
              Device <br></br> Data
            </p>
            {deviceActive && (
              <div className="absolute top-4 right-4 w-4 h-4 rounded-[50%] bg-green-400"></div>
            )}
          </div>
          <div
            className={`${
              satelliteActive ? "bg-[#323B4B]" : "bg-white"
            } relative h-full basis-1/3 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg`}
            onClick={() => {
              setDeviceActive(false);
              setGroundStationActive(false);
              setSatelliteActive(true);
            }}
          >
            <div className="w-auto p-4 rounded-[50%] border-2 bg-[#F3F3F3]">
              <img src={Satelitte} alt="" width={"40vmin"} />
            </div>
            <p
              className={`text-center font-semibold ${
                satelliteActive ? "text-white" : "text-[#323B4B]"
              }`}
            >
              Satellite <br></br> Data
            </p>
            {satelliteActive && (
              <div className="absolute top-4 right-4 w-4 h-4 rounded-[50%] bg-green-400"></div>
            )}
          </div>
          <div
            className={`${
              groundStationActive ? "bg-[#323B4B]" : "bg-white"
            } relative h-full basis-1/3 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg`}
            onClick={() => {
              setDeviceActive(false);
              setGroundStationActive(true);
              setSatelliteActive(false);
            }}
          >
            <div className="w-auto p-4 rounded-[50%] border-2 bg-[#F3F3F3]">
              <img src={GroundStation} alt="" width={"40vmin"} />
            </div>
            <p
              className={`text-center font-semibold ${
                groundStationActive ? "text-white" : "text-[#323B4B]"
              }`}
            >
              Ground <br></br> Station Data
            </p>
            {groundStationActive && (
              <div className="absolute top-4 right-4 w-4 h-4 rounded-[50%] bg-green-400"></div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg" onClick={()=>navigate('/select-request')}>
          Back
        </button>
        <button className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg" onClick={()=>navigate('/select-devices')}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default DataSource;
