/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../assets/Search.svg";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { setDeviceSelected, setDevicesList } from "../redux/Features/DataSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  getAllDevices,
  getAllMobileDevices,
  getAllStationaryDevices,
} from "../Mock_Backend/server";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import Switch from "react-switch";

const DeviceImage = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bcolor }}
      className="inline-block rounded-md w-20 h-20 items-center"
    >
      <div
        style={{ color: props.bcolor === "#323B4B" ? "white" : "black" }}
        className="relative h-full text-xl font-semibold flex justify-center items-center text-center"
      >
        {props.deivceId || "M1"}
      </div>
    </div>
  );
};

var Data = [
  {
    items: [],
  },
  {
    items: [],
  },
  { items: [] },
  {
    items: [],
  },
];

const DeviceSelection = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value)
  const showNotify = () => toast("Enter Any one Device to Proceed Further...");
  const backend = useSelector((state) => state.data.backend);
  const countData = useSelector((state) => state.data.countData);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const selectedDevices = useSelector(
    (state) => state.data.newRequest.deviceSelected
  );
  console.log(selectedDevices);
  // const [Data,setData]=useState([])
  const navigate = useNavigate();
  // const Location = useLocation();
  const [state, setState] = React.useState(false);
  const [clickAll, setCA] = React.useState(false);

  const [mstate, setMstate] = React.useState(false);
  const [clickAllm, setCAM] = React.useState(false);

  const [sState, setSstate] = React.useState(false);
  const [clickAlls, setCAS] = React.useState(false);
  const [color, setColor] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [devices, setDevices] = useState();
  console.log(countData)
  const validateConvert = (data) => {
    console.log(data);
    data = data.toUpperCase();
    data = data.replace(" ", "");
    let arr = data.split(",");
    console.log(arr);
    console.log(data);
    var res = "";
    for (let d of arr) {
      if (d.includes("-")) {
        let temp = d.split("-");
        var [x, y] = temp;

        if (x[0] === y[0] || (x[1] === "M" && y[1] === "M")) {
          var from, to;

          if (x[1] === "M") {
            from = x.split(x[1])[1];
            to = y.split(y[1])[1];
          } else {
            from = x.split(x[0])[1];
            to = y.split(y[0])[1];
          }
          from = parseInt(from);
          to = parseInt(to);

          if (!!from && !!to && x[1] === "M") {
            if (from > to) {
              [from, to] = [to, from];
            }
            for (var i = from; i <= to; i++) {
              res += x[0] + x[1] + `${i},`;
            }
          } else if (!!from && !!to) {
            if (from > to) {
              [from, to] = [to, from];
            }
            for (var j = from; j <= to; j++) {
              res += x[0] + `${j},`;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        // console.log(d)
        if (
          (d[0] === "M" || d[0] === "S") &&
          !!parseInt(d.slice(1, d.length))
        ) {
          res += d[0] + `${parseInt(d.slice(1, d.length))},`;
        } else if (d[1] === "M" && !!parseInt(d.slice(2, d.length))) {
          res += d[0] + d[1] + `${parseInt(d.slice(2, d.length))},`;
        } else {
          return false;
        }
      }
    }
    // res.map()
    // Data=[res];
    res = res.slice(0, res.length - 1);
    var array = res.split(",");
    console.log(array);
    array.forEach((item) => {
      if (/S/.test(item)) {
        if (!Data[0].items?.includes(item.toString()))
          Data[0].items.push(item.toString());
      } else if (/^[M]\d/.test(item)) {
        if (!Data[1].items?.includes(item.toString())) Data[1].items.push(item);
      } else if (/^LM/.test(item)) {
        if (!Data[2].items?.includes(item.toString())) Data[2].items.push(item);
      } else if (/^RM/.test(item)) {
        if (!Data[3].items?.includes(item.toString())) Data[3].items.push(item);
      }
    });
    return res;
  };
  const getAllDevicesData = async () => {
    Data[0].items = [];
    Data[1].items = [];
    Data[2].items = [];
    Data[3].items = [];
    let str=""
    if (!backend) {
      const getdata = await getAllDevices();
      getdata.map((item) => {
        str = str + item.device + ",";
      });
    }
    else{
      countData?.map((item) => {
        if(/^[M]\d/.test(item.collection)||/^[S]\d/.test(item.collection)){
          str = str + item.collection + ",";
        }
        console.log(str)
      });
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
    let x = validateConvert(str);
    console.log(x);
    inputRef.current.value = x;
    setSelectedOptions(x);
    setColor(false);
  };
  const getAllMobileDevicesData = async () => {
    Data[0].items = [];
    Data[1].items = [];
    Data[2].items = [];
    Data[3].items = [];
    let str=""
    if (!backend) {
      const getdata = await getAllDevices();
      getdata.map((item) => {
        str = str + item.device + ",";
      });
    }
    else{
      countData?.map((item) => {
        if(/^[M]\d/.test(item.collection)){
          str = str + item.collection + ",";
        }
        console.log(str)
      });
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
    let x = validateConvert(str);
    console.log(x);
    inputRef.current.value = x;
    setSelectedOptions(x);
    setColor(false);
  };
  const getAllStationaryDevicesData = async () => {
    Data[0].items = [];
    Data[1].items = [];
    Data[2].items = [];
    Data[3].items = [];
    let str=""
    if (!backend) {
      const getdata = await getAllDevices();
      getdata.map((item) => {
        str = str + item.device + ",";
      });
    }
    else{
      countData?.map((item) => {
        if(/^[S]\d/.test(item.collection)){
          str = str + item.collection + ",";
        }
        console.log(str)
      });
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
    let x = validateConvert(str);
    console.log(x);
    inputRef.current.value = x;
    setSelectedOptions(x);
    setColor(false);
  };

  useEffect(() => {
    Data[0].items = [];
    Data[1].items = [];
    Data[2].items = [];
    Data[3].items = [];
    if (selectedDevices.toString().length > 0) {
      let devices = validateConvert(selectedDevices);
      console.log(devices);
      setDevices(devices);
    }
    inputRef.current.value = selectedDevices;
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <ProgressBar />
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[3%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select the Devices</p>
        </div>
      </div>
      <div className="w-screen ml-[0%] flex justify-center items-center">
        <div className="basis-[10%] h-20"></div>
        <div className="flex flex-row basis-4/5 gap-[2%] flex-auto justify-start items-center mt-[2%]">
          <div className="flex justify-start basis-2/6  items-center border-2 px-3 py-1 rounded-full bg-[#EEEEEE]">
            <img src={Search} alt="" width={"20vmin"} className="" />
            <input
              style={{
                color: color ? "red" : "black",
                height: "30px",
                borderColor: color ? "red" : "black",
                fontSize: "20px",
                borderRadius: "5px",
              }}
              ref={inputRef}
              className="border-none focus:outline-none px-4 bg-[#eeeeee]" /*options={optionList}*/
              placeholder="e.g. s1-s10,m3-m5"
              onChange={(data) => {
                let len = data.target.value.length;
                Data[0].items = [];
                Data[1].items = [];
                Data[2].items = [];
                Data[3].items = [];
                if (len > 0) {
                  let x = validateConvert(data.target.value);
                  console.log(x);
                  setDevices(x);
                  if (len && x !== false) {
                    setSelectedOptions(x);
                    setCA(false);
                    setCAM(false);
                    setCAS(false);
                    setColor(false);
                  } else {
                    setColor(true);
                  }
                } else if (len === 0) {
                  Data[0].items = [];
                  Data[1].items = [];
                  Data[2].items = [];
                  Data[3].items = [];
                }
              }}
              // value={selectedDevices}
            />
            
          </div>
          <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
        className="flex-nowrap"
      >
        <FormControlLabel value="a" control={<Radio />} label="A" />
        <FormControlLabel value="s" control={<Radio />} label="S" />
        <FormControlLabel value="b" control={<Radio />} label="Both" />
      </RadioGroup>
    </FormControl>
          <div className="flex flex-row justify-center items-center gap-4 basis-4/6">
            <div
              style={{
                backgroundColor:
                  clickAll && !(clickAllm || clickAlls) ? "#F2FFA0" : "",
              }}
              onMouseOver={() => {
                setState(true);
              }}
              onMouseOut={() => {
                setState(false);
              }}
              onClick={() => {
                if (!clickAll) {
                  setCAM(false);
                  setCAS(false);
                }
                getAllDevicesData();
                setCA(!clickAll);
              }}
              className="bg-[#eeeeee] p-3 rounded-lg cursor-pointer"
            >
              Select all devices{" "}
            </div>
            <div
              style={{ backgroundColor: clickAllm ? "#F2FFA0" : "" }}
              onClick={() => {
                if (!clickAllm) {
                  setCA(false);
                  setCAS(false);
                }
                getAllMobileDevicesData();
                setCAM(!clickAllm);
              }}
              onMouseOver={() => {
                setMstate(true);
              }}
              onMouseOut={() => {
                setMstate(false);
              }}
              className="bg-[#eeeeee] p-3 rounded-lg cursor-pointer"
            >
              Select all Mobile{" "}
            </div>
            <div
              style={{ backgroundColor: clickAlls ? "#F2FFA0" : "" }}
              onClick={() => {
                if (!clickAlls) {
                  setCA(false);
                  setCAM(false);
                }
                getAllStationaryDevicesData();
                setCAS(!clickAlls);
              }}
              onMouseOver={() => {
                setSstate(true);
              }}
              onMouseOut={() => {
                setSstate(false);
              }}
              className="bg-[#eeeeee] p-3 rounded-lg cursor-pointer"
            >
              Select all Stationary{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen ml-[0%] flex justify-center items-center mr-[5%]">
        <div className="basis-[10%] h-20"></div>
        <div className="flex basis-4/5 flex-auto p-4 h-[40vh] gap-4 overflow-auto">
          {Data?.map((item, index) => {
            if (item.items.length > 0) {
              return (
                <div
                  className="h-max bg-[#F2F5FB] flex flex-wrap gap-4 p-4 rounded-lg"
                  key={index}
                >
                  {item.items?.map((user) => (
                    <DeviceImage
                      key={user}
                      bcolor={"#323B4B"}
                      deivceId={user}
                      mobility={user[0]}
                    />
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w-[80%] fixed bottom-0 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button
          className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg"
          onClick={() => navigate("/select-dates")}
        >
          Back
        </button>
        <button
          className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg"
          onClick={() => {
            if (inputRef.current.value.length > 0) {
              navigate("/select-datatype");
              dispatch(setDeviceSelected(inputRef.current.value));
              dispatch(setDevicesList(devices));
            } else {
              showNotify();
            }
          }}
        >
          Continue
        </button>
      </div>
      <ToastContainer position="top-right" closeOnClick autoClose={false} />
    </div>
  );
};

export default DeviceSelection;
