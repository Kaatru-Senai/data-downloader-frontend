import React from "react";
import ProgressBar from "./Progress_bar/ProgressBar";
import Plus from "../assets/Vector (1).svg";
import Search from "../assets/Search_request.png";
import Navbar from "./Navbar";
import JobId from "../assets/job_id.svg";

function JobInputPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <ProgressBar />
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Enter Job ID</p>
        </div>
      </div>
      <div className="w-[65vw] h-[45vh] flex justify-center items-center mr-[40%]">
        <div className="flex flex-row justify-between items-center gap-8">
          <label htmlFor="" className="font-semibold">
            JOB ID :-
          </label>
          <div className="flex flex-row justify-center items-center border-2 pl-2 rounded-lg">
            <img src={JobId} alt="" width={"35vmin"} />
            <div className="h-full w-4 bg-black"></div>
            <input type="text" name="" id="" className="p-2 focus:outline-0" />
          </div>
        </div>
      </div>
      <div className="w-[80vw] flex flex-row justify-end">
        <button
          type="submit"
          className="w-auto bg-[#323B4B] text-white px-6 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default JobInputPage;
