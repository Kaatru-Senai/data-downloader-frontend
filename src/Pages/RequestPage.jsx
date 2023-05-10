import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import RequestType from "../Components/RequestType";
import DataSource from "../Components/DataSource";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import DeviceSelection from "../Components/DeviceSelection";
import DataInfo from "../Components/DataInfo";
import DataFormat from "../Components/DataFormat";
import Download from "../Components/Download";
import DatabaseInput from "../Components/DatabaseInput";

function RequestPage() {
  
  const [progress, setProgress] = useState(1);
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
        <RequestType nextProgress={nextProgress} previousProgress={previousProgress}/>
      }
      {
        progress==2 && 
        <DataSource nextProgress={nextProgress} previousProgress={previousProgress}/>
      }
      {
        progress==3 && 
        <DeviceSelection nextProgress={nextProgress} setProgress={setProgress} previousProgress={previousProgress}/>
      }
      {
        progress==4 && 
        <DataFormat nextProgress={nextProgress} previousProgress={previousProgress}/>
      }
      {
        progress==5 && 
        <DatabaseInput nextProgress={nextProgress} previousProgress={previousProgress}/>
      }
      {
        progress==10 && 
        <DataInfo nextProgress={nextProgress} setProgress={setProgress} previousProgress={previousProgress}/>
      }
      {
        progress==6 && 
        <Download nextProgress={nextProgress} previousProgress={previousProgress}/>
      }
    </div>
  );
}

export default RequestPage;
