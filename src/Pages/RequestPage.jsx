import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import RequestType from "../Components/RequestType";
import DataType from "../Components/DataType";
import ProgressBar from "../Components/Progress_bar/ProgressBar";

function RequestPage() {
  const [progress, setProgress] = useState(2);
  const nextProgress=()=>{
    setProgress(progress=>progress+1);
  }
  const previousProgress=()=>{
    setProgress(progress=>progress-1);
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      {progress>1 && <ProgressBar/>}
      {progress==1 &&
        <RequestType/>
      }
      {
        progress==2 && 
        <DataType/>
      }
    </div>
  );
}

export default RequestPage;
