import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import ProgressBar from "../Components/Progress_bar/ProgressBar";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import RiveAnimation from "../assets/liquid_download.riv";
import { useSelector } from "react-redux";
import { getFile } from "../Mock_Backend/server";

function Download() {
  
  const data = useSelector((state) => state.data.newRequest);
  const { rive, RiveComponent } = useRive({
    src: RiveAnimation,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    stateMachines: "State machine 1",
    autoplay: true,
    onLoop: false
  });
  const navigate = useNavigate();

  const getFileRequest=async()=>{
    const getRequest=await getFile();
    if(getRequest){
      return true;
    }
    else{
      return false;
    }
  }
  // const [count,setCount]=useState(0);
  const startAnimation = async(count) => {
    // rive.reset();
    if (count == 0) {
      let inputs = rive.stateMachineInputs("State machine 1");
      const Trigger = inputs.find((i) => i.name === "Downloading");
      Trigger.value = false;
      const Progress = inputs.find((i) => i.name === "Progress");
      Progress.value = 0;
      setTimeout(() => {
        startAnimation(count + 1);
      }, 100);
    } else {
      let inputs = rive.stateMachineInputs("State machine 1");
      console.log(inputs);
      const Trigger = inputs.find((i) => i.name === "Downloading");
      Trigger.value = true;
      const Progress = inputs.find((i) => i.name === "Progress");
      console.log(count);
      Progress.value = count;
      const timer=setTimeout(async() => {
        if(count==50){
         
          const wait=await getFileRequest();

          if(wait===true){
            startAnimation(52);
          }
          else{
            startAnimation(count);
          } 
        }
        else{
          startAnimation(count + 1);
        }
      }, 100);
      if(count===100){
        console.log("should terminate here")
        clearTimeout(timer);
      }
    }
  };
  // useEffect(()=>{
  //   startAnimation(0);
  // })
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
            <RiveComponent onLoad={()=>startAnimation(0)}/>
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
                  <p className="font-normal">#234235</p>
                </div>
                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">From Date :</p>
                  <p className="font-normal">
                    {data.from.toLocaleString().split(",")[0]}
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">To Date :</p>
                  <p className="font-normal">
                    {data.from.toLocaleString().split(",")[0]}
                  </p>
                </div>

                <div className="flex flex-row justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">File Type : </p>
                  <p className="font-normal">{data.dataFormat}</p>
                </div>
                <div className="flex flex-row  justify-between w-full p-1 border-b-2">
                  <p className="font-semibold">Sensors: </p>
                  <p className="font-normal">{data.deviceSelected}</p>
                </div>
                <div className="flex flex-row justify-between w-full p-1">
                  <p className="font-semibold">Status: </p>
                  <p className="font-normal">Pending</p>
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
          onClick={() => console.log("start")}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Download;
