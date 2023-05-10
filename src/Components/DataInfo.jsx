/* eslint-disable react/prop-types */
import React, { useState } from "react";
import calendar from "../assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { TileLayer, Marker, Popup, MapContainer, Tooltip } from "react-leaflet";


function DataInfo({setProgress}) {
  const [startDate, setStartDate] = useState();
  return (
    <>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Check the Data-Count from Devices</p>
        </div>
      </div>
      <div className="w-[85vw] h-[45vh] flex justify-center items-center ml-[25%] mr-[20%] mt-[2%] gap-4">
        <div className="basis-1/3 h-full flex flex-col justify-center gap-[10%]">
          <div className="">
            <label htmlFor="">From Date</label>
            <div className="flex flex-row-reverse border-2">
              <img src={calendar} alt="" className="mr-[5%]" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full flex-auto p-2 focus:outline-none "
                placeholderText="DD/MM/YYYY"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="">To Date</label>
            <div className="flex flex-row-reverse border-2">
              <img src={calendar} alt="" className="mr-[5%]" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full flex-auto p-2 focus:outline-none "
                placeholderText="DD/MM/YYYY"
              />
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="basis-1/3 bg-[#F2F5FB] h-full rounded-lg flex flex-col justify-center items-center">
          <div className="basis-1/6">
            <h2 className="text-xl">Data Device History</h2>
          </div>
          <div className="basis-2/6 bg-white w-[90%] h-auto flex  flex-col justify-center items-center gap-[10%] px-[8%]">
            <div className="flex flex-row justify-between items-center w-full">
              <p className="font-semibold font-mono">Device ID</p>
              <p className="font-semibold font-mono">{"M2"}</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="font-semibold font-mono">Data Count</p>
              <p className="font-semibold font-mono">{"9283498"}</p>
            </div>
          </div>
          <div className="basis-2/6 bg-white w-[90%] h-auto flex  flex-col justify-center items-center gap-[10%] px-[8%] mt-4">
            <div className="flex flex-row justify-between items-center w-full">
              <p className="font-semibold font-mono">Device ID</p>
              <p className="font-semibold font-mono">{"M2"}</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="font-semibold font-mono">Data Count</p>
              <p className="font-semibold font-mono">{"9283498"}</p>
            </div>
          </div>
        </div>
        <div className="basis-1/3 bg-[#F2F5FB] h-full rounded-lg">
            <MapContainer center={[12.987109, 80.229081]} zoom={13} scrollWheelZoom={false} className="markercluster-map">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[12.989283, 80.231484]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                <Tooltip permanent>
                        <p>{"S22"}</p>
                </Tooltip>
              </Marker>
            </MapContainer>
          </div>
      </div>
      <div className="w-[80%] flex flex-row justify-between items-center mb-[2%] mt-[2%]">
          <button className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg" onClick={()=>setProgress(3)}>Continue</button>
      </div>
    </>
  );
}

export default DataInfo;
