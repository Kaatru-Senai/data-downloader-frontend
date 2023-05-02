import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import RequestType from "../Components/RequestType";
import DataType from "../Components/DataType";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import DeviceSelection from "../Components/DeviceSelection";
import DataInfo from "../Components/DataInfo";

function RequestPage() {
  const [progress, setProgress] = useState(4);
  const nextProgress=()=>{
    setProgress(progress=>progress+1);
  }
  const previousProgress=()=>{
    setProgress(progress=>progress-1);
  }
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      {progress>1 && <ProgressBar />}
      {progress==1 &&
        <RequestType nextProgress={nextProgress}/>
      }
      {
        progress==2 && 
        <DataType nextProgress={nextProgress}/>
      }
      {
        progress==3 && 
        <DeviceSelection nextProgress={nextProgress}/>
      }
      {
        progress==4 && 
        <DataInfo nextProgress={nextProgress}/>
      }
    </div>
  );
}

export default RequestPage;
