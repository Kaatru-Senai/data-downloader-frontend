/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import ProgressBar from "../Components/Progress_bar/ProgressBar";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
// import RiveAnimation from "public/liquid_download.riv";
import { useSelector } from "react-redux";
// import { getFile } from "../Mock_Backend/server";
import axios from "axios";
import Axios from "axios";
import FileDownload from "js-file-download";

function Download() {
  const jobId = useSelector((state) => state.data.jobId);
  console.log(jobId);
  const data = useSelector((state) => state.data.newRequest);
  const { rive, RiveComponent } = useRive({
    src: "liquid_download.riv",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    stateMachines: "State machine 1",
    autoplay: true,
    onLoop: false,
  });
  const navigate = useNavigate();
  const [progress, setProgress] = useState(false);
  const token=JSON.parse(sessionStorage.getItem("token"))
  const startAnimation = async (count, job_Id) => {
    if (count == 0) {
      let inputs = rive.stateMachineInputs("State machine 1");
      const Trigger = inputs.find((i) => i.name === "Downloading");
      Trigger.value = false;
      const Progress = inputs.find((i) => i.name === "Progress");
      Progress.value = 0;
      setTimeout(() => {
        // console.log(postJob.data.job_id);
        startAnimation(count + 1, jobId);
      }, 100);
    } else {
      let inputs = rive.stateMachineInputs("State machine 1");
      console.log(inputs);
      const Trigger = inputs.find((i) => i.name === "Downloading");
      Trigger.value = true;
      const Progress = inputs.find((i) => i.name === "Progress");
      console.log(count);
      const timer = setInterval(async () => {
        
        const getRequest = await axios.get(
          `http://127.0.0.1:8000/job/status/${job_Id}`,
          {
            headers: {
              "x-caas-token": token,
            },
          }
        );
        Progress.value = getRequest.data.progress;
        if (getRequest.data.progress === 100) {
          setProgress(true);
          clearInterval(timer);
          setTimeout(() => {
            Axios({
              url: `http://127.0.0.1:8000/job/download/${job_Id}`,
              method: "GET",
              responseType: "blob",
              headers: {
                "x-caas-token": token,
              },
            }).then((response) => {
              FileDownload(response.data, `${job_Id}.zip`);
            });
          }, 6000);
        }
      }, 5000);
      Progress.value = count;

      if (count === 100) {
        console.log("should terminate here");
        clearTimeout(timer);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-32">
        <div className="basis-[10%] text-center"></div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Download the Data</p>
        </div>
      </div>
      <div className="w-screen h-[50vh] flex-auto flex flex-row items-start justify-center ml-[0%] mt-[1%]">
        <div className="basis-[10%] text-center h-full"></div>
        <div className="flex flex-row justify-between h-[80%] items-start flex-auto mr-[2%] gap-4">
          <div className="basis-[30%]  bg-[#F2F5FB] flex-auto h-full">
            <RiveComponent onLoad={() => startAnimation(0)} />
          </div>
          <div className="bg-[#F2F5FB] flex-auto h-full flex flex-col p-2 font-semibold text-[3vmin]">
            <div className="p-2 text-center">
              <h2>Data Invoice</h2>
            </div>
            <div className="flex-auto flex flex-row gap-8">
              <div className="flex flex-col justify-between items-start font-[Nunito] bg-white w-full my-[0%] mx-[5%] px-[5%] py-[3%] rounded-lg">
                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">Name: </p>
                  <p className="font-normal">Collocation Study</p>
                </div>
                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">JOB ID :</p>
                  <p className="font-normal">{jobId}</p>
                </div>
                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">From Date :</p>
                  <p className="font-normal">{data.from?.slice(4, 15)}</p>
                </div>
                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">To Date :</p>
                  <p className="font-normal">{data.to?.slice(4, 15)}</p>
                </div>

                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">File Type : </p>
                  <p className="font-normal">{data.dataFormat}</p>
                </div>
                <div className="flex flex-row  justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">Sensors: </p>
                  <p className="font-normal">
                    {data?.deviceSelected?.toString().slice(0, 10) + "....."}
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full p-1">
                  <p className="font-semibold">Status: </p>
                  <p className="font-normal">
                    {progress ? "Completed" : "Pending"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] fixed bottom-1 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button
          className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg"
          onClick={() => navigate("/select-datatype")}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-[#323B4B] text-white rounded-lg"
          onClick={() => startAnimation(0)}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Download;

// const getFileRequest = async (job_Id) => {
//   console.log("one time execution");
//   let getRequest;
//   let timer;
//   let progress;
//   if (backend) {
//     if (progress !== 100) {
//       timer = setInterval(async () => {
// getRequest = await axios.get(
//   `http://127.0.0.1:8000/job/status/${job_Id}`
// );
//         console.log(getRequest.data.progress);
//         progress = getRequest.data.progress;
//         if (getRequest.data.progress > 50) {
//           setJobProgress(getRequest.data.progress);
//         }
//         if (getRequest.data.progress === 100) {
//           console.log("should be clear here");
//           clearInterval(timer);
//           return true;
//         }
//       }, 1000);
//     } else if (progress === 100) {
//       console.log("donwload api");
//       clearInterval(timer);
//       Axios({
//         url: `http://127.0.0.1:8000/job/download/${job_Id}`,
//         method: "GET",
//         responseType: "blob", // Important
//       }).then((response) => {
//         FileDownload(response.data, `${job_Id}.zip`);
//       });
//     }
//   } else {
//     getRequest = await getFile();
//   }
//   console.log(progress)
//   if (progress === 100) {
//     console.log("returining true here");
//     return true;
//   }
//   else{
//     return false
//   }
// };
// let job_Id;
// // const [count,setCount]=useState(0);
// const startAnimation = async (count) => {
//   if (count == 0) {
//     const st = Date.parse(data.from);
//     const et = Date.parse(data.to);
//     const postJob = await axios.post(`http://127.0.0.1:8000/job/`, {
//       st: st,
//       et: et,
//       cols: data.devices,
//       db: data.dbName,
//       dt: "a",
//     });
//     setJobId(postJob.data.job_id);
//     job_Id = postJob.data.job_id;
//     console.log(jobId);
//     let inputs = rive.stateMachineInputs("State machine 1");
//     const Trigger = inputs.find((i) => i.name === "Downloading");
//     Trigger.value = false;
//     const Progress = inputs.find((i) => i.name === "Progress");
//     Progress.value = 0;
//     setTimeout(() => {
//       startAnimation(count + 1);
//     }, 100);
//   } else {
//     let inputs = rive.stateMachineInputs("State machine 1");
//     console.log(inputs);
//     const Trigger = inputs.find((i) => i.name === "Downloading");
//     Trigger.value = true;
//     const Progress = inputs.find((i) => i.name === "Progress");
//     console.log(count);
//     Progress.value = count;
//     // if(count===50){

//     // }
//     const timer = setTimeout(async () => {
//       if (count === 50) {
//         console.log(job_Id);
//         const wait = await getFileRequest(job_Id);
//         console.log(wait);
//         if (wait === true) {
//           startAnimation(52);
//         } else {
//           console.log(jobProgress);
//           startAnimation(50);
//         }
//       } else {
//         console.log(jobProgress);
//         startAnimation(count + 1);
//       }
//     }, 100);
//     if (count === 100) {
//       console.log("should terminate here");
//       clearTimeout(timer);
//     }
//   }
// };
