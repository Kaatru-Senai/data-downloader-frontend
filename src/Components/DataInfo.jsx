/* eslint-disable react/prop-types */
import React, { useState } from "react";
import calendar from "../assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { TileLayer, Marker, Popup, MapContainer, Tooltip } from "react-leaflet";
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import backArrow from '../assets/arrow_back.svg';

function DataInfo() {
  // const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex w-full mt-[80px] uppercase justify-start items-center gap-[2vh] cursor-pointer">
        <div className="w-12 h-12 flex justify-center items-center border-2 rounded-[50%] ml-3">
          <img src={backArrow} alt="" width={40}/>
        </div>
        <p className="text-black text-xl">
          Check Device Data Count Here
        </p>
      </div>
      <div className="w-[95vw] h-[75vh] flex justify-center items-center ml-[25%] mr-[20%] gap-4">
        <div className="basis-1/2 h-full flex flex-col justify-center gap-[2%]">
          <div className="">
            <div className="">
              <label htmlFor="" className="font-bold">
                From Date
              </label>
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
              <label htmlFor="" className="font-bold">
                To Date
              </label>
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
            <div className="mt-4 w-full flex justify-end">
              <button className="px-4 py-2 bg-[#323B4B] text-white rounded-lg">
                Check
              </button>
            </div>
          </div>
          <div className="flex-auto bg-[#F2F5FB] h-full rounded-lg">
            <MapContainer
              center={[12.987109, 80.229081]}
              zoom={13}
              scrollWheelZoom={false}
              className="markercluster-map"
            >
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
        <div className="basis-1/2 bg-[#F2F5FB] h-full rounded-lg flex flex-col justify-center items-center mr-[1%]">
          <div className="basis-[10%]">
            <h2 className="text-xl mt-[4%]">Device Data Count</h2>
          </div>
          <div className="flex-auto w-[100%] grid grid-cols-4 h-full px-[5%] gap-y-2 overflow-auto">
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2">
              <div className="flex flex-col justify-center items-start">
                <p className="text-left mr-8">{"S22"}</p>
                <p className="text-xl font-bold">{"11K"}</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      {/* <div className="w-[80%] flex flex-row justify-between items-center fixed bottom-0">
        <button
          className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg"
          onClick={() => navigate("/select-devices")}
        >
          Continue
        </button>
      </div> */}
    </div>
  );
}

export default DataInfo;
