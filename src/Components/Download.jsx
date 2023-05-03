import React from "react";

function Download({nextProgress,previousProgress}) {
  return (
    <>
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center"></div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Download the Data</p>
        </div>
      </div>
      <div className="w-screen h-[50vh] flex-auto flex flex-row items-start justify-center ml-[0%] mt-[1%]">
        <div className="basis-[10%] text-center h-full"></div>
        <div className="flex flex-row justify-between h-[80%] items-start flex-auto mr-[2%] gap-4">
          <div className="basis-[20%]  bg-[#F2F5FB] flex-auto h-full">
            Download Animation Here
          </div>
          <div className="bg-[#F2F5FB] flex-auto h-full flex flex-col p-2 font-semibold text-[3vmin]">
            <div className="p-2 border-b-4 border-dashed">
              <h2>Data Invoice</h2>
            </div>
            <div className="flex-auto flex flex-row gap-8">
              <div className="flex flex-col justify-between items-start">
                <div className="flex flex-col">
                  <p className="font-semibold">JOB ID :- </p>
                  <i className="font-normal">
                    lsjf-werljsa-ekjja-ejalsjf-lkajsf-ejljerjlejr
                  </i>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">From Date :- </p>
                  <i className="font-normal">10/08/2001</i>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">To Date :- </p>
                  <i className="font-normal">10/09/2001</i>
                </div>
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="flex flex-col basis1/3">
                  <p className="font-semibold">File Type :- </p>
                  <i className="font-normal">CSV</i>
                </div>
                <div className="flex flex-col basis-1/3">
                  <p className="font-semibold">Sensor</p>
                  <i className="font-normal">M22</i>
                </div>
                <div className="basis-1/3"></div>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center">
                <button className="px-2 py-1 bg-[#323B4B] text-white rounded-lg">Download</button>
              </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] fixed bottom-1 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg" onClick={previousProgress}>
          Back
        </button>
      </div>
    </>
  );
}

export default Download;
