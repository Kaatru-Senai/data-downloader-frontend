import React, { useRef, useState } from "react";
import LoginImage from "../assets/heroImage.svg";
import kaatruLogo from "../assets/kaatru_logo.svg";
import userId from "../assets/user_id.svg";
import password from "../assets/password.svg";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/Features/DataSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const emailInput = useRef();
  const pwdInput = useRef();
  const dispatch = useDispatch();
  const showNotify = (msg) => toast.error(msg);
  const logUser = async () => {
    console.log(typeof emailInput.current.value);
    if (
      emailInput.current.value.length > 0 &&
      pwdInput.current.value.length > 0
    ) {
      try {
        const isUser = await axios.post("https://bw02.kaatru.org/auth/", {
          email: emailInput.current.value,
          pwd: pwdInput.current.value,
        });
        if (isUser.status === 200) {
          console.log(isUser.data.token);
          dispatch(setUser(true));
          sessionStorage.setItem("user", true);
          sessionStorage.setItem("token", JSON.stringify(isUser.data.token));
          setIsLoading(false)
          navigate("/select-request");
        }
      } catch (err) {
        showNotify(err.response.data.detail);
      }
    } else {
      if (emailInput.current.value.length === 0)
        showNotify("Please fill the Email Field!!!");
      else if (pwdInput.current.value.length === 0)
        showNotify("Pleaase fill the Password Field!!");
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <Box
        sx={{ display: "flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}
        className="loading_div"
      >
        <CircularProgress />
        <p className="text-black ">Logging you in....</p>
      </Box>}
      <div className="flex flex-row h-auto grow">
        <div
          className="basis-[50%] relative flex flex-col justify-center items-center shadow-[0_35px_60px_35px_rgba(0,0,0,0.3)]"
          style={{ backgroundColor: "#323B4B" }}
        >
          <img
            src={kaatruLogo}
            alt=""
            width={150}
            className="ml-4 fixed left-0 top-4"
          />
          <p className="text-4xl text-white absolute left-[5%] top-[20%]">
            Welcome to <br /> Data Downloader
          </p>
          <div className="w-[90%] h-[50%] absolute top-[40%] flex flex-col">
            <p className="text-white text-2xl">Login</p>
            <p className="text-[#B7B7B7]">
              please fill the your Credentials below
            </p>
            <div className="flex flex-col gap-8 mt-[5%]">
              <div className="flex flex-row w-[90%]">
                <input
                  type="text"
                  placeholder="User ID"
                  className="w-[80%] bg-[#323b4b] text-white p-2 focus:outline-none border-b-2"
                  ref={emailInput}
                />
                <img src={userId} alt="" className="border-b-2" />
              </div>
              <div className="flex flex-row w-[90%]">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[80%] bg-[#323b4b] text-white p-2 focus:outline-none border-b-2"
                  ref={pwdInput}
                />
                <img src={password} alt="" className="border-b-2 " />
              </div>
              <div className="flex w-[90%] flex-col justify-center items-center gap-10">
                <a href="/forgotPassword" className="text-[#B7B7B7] underline">
                  forgot password ?
                </a>
                <button
                  className="bg-[#B5FFB4] w-[40%] py-2 rounded-lg"
                  onClick={()=>{setIsLoading(true);logUser()}}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/3 flex justify-center items-center">
          <img src={LoginImage} alt="" width={"80%"} height={"90%"} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
