import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import calendar from "../assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Search from "../assets/Search.svg";
import { useDispatch } from "react-redux";
import { setFromDate, setToDate } from "../redux/Features/DataSlice";

function DateSelection() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <ProgressBar />
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select a Data Range</p>
        </div>
      </div>
      <div className="w-[85vw] h-[45vh] flex flex-row justify-center items-center ml-[20%] mr-[10%] mt-[2%] gap-5">
        <div className="basis-1/3 h-full flex flex-col justify-between">
          <div className="w-full flex justify-end">
            <button
              className="w-auto px-2 py-2 bg-[#323B4B] rounded-lg text-white font-bold"
              onClick={() => navigate("/map")}
            >
              View Map
            </button>
          </div>
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
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
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
        </div>
        <div className="basis-2/3 bg-[#F2F5FB] h-full rounded-lg flex flex-col justify-center items-center">
          <div className="basis-[10%]">
            <h2 className="text-xl mt-[4%]">Device Data Count</h2>
          </div>
          <div className="flex w-full justify-start ml-[10%] py-4">
            <div className="flex justify-start items-center border-2 px-3 py-1 rounded-full bg-[#EEEEEE]">
              <img src={Search} alt="" width={"20vmin"} className="" />
              <input
                style={{
                  color: "black",
                  height: "30px",
                  borderColor: "black",
                  fontSize: "20px",
                  borderRadius: "5px",
                }}
                className="border-none focus:outline-none px-4 bg-[#eeeeee]" /*options={optionList}*/
              />
            </div>
          </div>
          <div className="flex-auto w-[100%] grid lg:grid-cols-5 2xl:grid-cols-6 h-full px-[5%] gap-y-2 overflow-auto">
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
      <div className="w-[80%] flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button
          className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg"
          onClick={() => navigate("/select-datasource")}
        >
          Back
        </button>
        <button
          className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg"
          onClick={() => {navigate("/select-devices");dispatch(setFromDate(startDate));dispatch(setToDate(endDate))}}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DateSelection;
