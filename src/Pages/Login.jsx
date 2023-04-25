import React from "react";
import LoginImage from "../assets/font-page.png";
import Navbar from "../Components/Navbar";

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex flex-row h-auto grow">
        <div
          className="basis-1/2 flex justify-center items-center shadow-sm"
          style={{ backgroundColor: "#323B4B" }}
        >
          <div className="w-2/3 h-4/6 bg-white"></div>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <img src={LoginImage} alt="" width={"70%"} height={"80%"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
