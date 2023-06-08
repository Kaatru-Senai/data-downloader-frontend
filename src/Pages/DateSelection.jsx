import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import calendar from "../assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Search from "../assets/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountData,
  setDBName,
  setDeviceSelected,
  setFromDate,
  setToDate,
} from "../redux/Features/DataSlice";
import {
  getDatabaseList,
  getDeviceStats,
  getMarkers,
} from "../Mock_Backend/server";
import millify from "millify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import DatabaseIcon from "../assets/database.svg";
import Dropdown from "react-dropdown";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

function DateSelection() {
  const [value,setValue]=useState([]);
  console.log(value)
  const selectRef=useRef();
  console.log(selectRef)
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setoptions] = useState([]);
  const fromDate = useSelector((state) => state.data.newRequest.from);
  const dbName = useSelector((state) => state.data.newRequest.dbName);
  const toDate = useSelector((state) => state.data.newRequest.to);
  const showNotify = () =>
    toast("Select the Database and From and To Dates...");
  const [colourOptions,setColorOptions] = useState()
  const backend = useSelector((state) => state.data.backend);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Option, SetOption] = useState({ value: dbName });
  console.log(fromDate.length);
  const [startDate, setStartDate] = useState(
    fromDate.length > 0 ? new Date(fromDate) : ""
  );
  const [endDate, setEndDate] = useState(
    toDate.length > 0 ? new Date(toDate) : ""
  );
  const [markers, setMarkers] = useState();
  const [devices, setDevices] = useState();
  const [devicesArr, setDevicesArr] = useState();
  const [allDevices, setAllDevices] = useState(false);

  //get the devices array list
  console.log(devicesArr);
  const validateConvert = (data) => {
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
    setDevicesArr(array);
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
  console.log(devices);
  const getData = async () => {
    setAllDevices(true);
    if (!backend) {
      const deviceStats = await getDeviceStats();
      console.log(deviceStats);
      setDevices(deviceStats);
    } else {
      console.log("main implementation");
      const st = Date.parse(startDate);
      const et = Date.parse(endDate);
      console.log(Option);
      const token=JSON.parse(sessionStorage.getItem("token"))
      const deviceStats = await axios.get(
        `http://127.0.0.1:8000/meta/dbs/${Option.value}/cols/ts?st=${st}&et=${et}`
      ,{
        headers:{
          'x-caas-token':token
        }
      });
      dispatch(setCountData(deviceStats.data.data));
      const markersArr = [];
        deviceStats.data.data.map((item) => {
          if(item.geo.length>0 && item.geo[0].lat!==undefined && item.geo[0].lon!==undefined)
            markersArr.push([item.geo[0]?.lat, item.geo[0]?.lon]);
        });
        console.log(markersArr);
        setMarkers(markersArr);
      const deviceOptions=[]
      deviceStats.data.data.map((item)=>{
        deviceOptions.push({value:item.collection,label:item.collection})
      })
      console.log(deviceOptions);
      setColorOptions(deviceOptions)
      let obj = [];
      deviceStats.data.data.map((item) => {
        obj.push({ device: item.collection, count: item.count });
      });
      setDevices(obj);
      setIsLoading(false);
    }
  };
  const SetDB = (e) => {
    dispatch(setDBName(e.value));
    SetOption(e);
  };
  useEffect(() => {
    //Mock Backend
    const getData = async () => {
      if (!backend) {
        const data = await getMarkers();
        const dbList = await getDatabaseList();
        dbList.map((item) => {
          setoptions((options) => [...options, item.dbname]);
        });
        const markersArr = [];
        data.map((item) => {
          markersArr.push([item.value.lat, item.value.long]);
        });
        console.log(markersArr);
        setMarkers(markersArr);
      } else {
        // const data = await getMarkers();
        console.log(JSON.parse(sessionStorage.getItem("token")))
        const token=JSON.parse(sessionStorage.getItem("token"))
        console.log(token)
        // axios.defaults.headers.common={token:"token"}
        const dbList = await axios.get("http://127.0.0.1:8000/meta/dbs",{
          headers:{
            'x-caas-token':token
          }
        });
        console.log(dbList.data.data);
        dbList.data.data.map((item) => {
          setoptions((options) => [...options, item]);
        });
      }
    };
    getData();
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
          <p className="font-semibold">Select a Data Range</p>
        </div>
      </div>
      <div className="w-[85vw] h-[45vh] flex flex-row justify-center items-center ml-[15%] mr-[10%] mt-[2%] gap-5">
        <div className="basis-1/3 h-full flex flex-col justify-between">
          <div className="w-full flex justify-end">
            <button
              className={`w-auto px-2 py-2 rounded-lg text-white font-bold ${
                !isCheck ? "bg-[#9d9d9d]" : "bg-[#323B4B]"
              }`}
              onClick={() => navigate("/map", { state: { markers } })}
              disabled={!isCheck}
            >
              View Map
            </button>
          </div>
          <div className="basis-4/5 flex-auto flex flex-row justify-start items-center gap-8">
            <label htmlFor="" className="font-semibold">
              Database:-
            </label>
            <div className="w-[20vw] flex flex-row justify-center items-center border-2 pl-2 rounded-lg bg-[#eeeeee]">
              <img src={DatabaseIcon} alt="" width={"20vmin"} />
              <div className="w-[2px] h-8 bg-stone-500 ml-4"></div>
              <Dropdown
                options={options}
                onChange={(e) => {
                  SetDB(e);
                  setIsCheck(false);
                }}
                value={Option.value}
                placeholder="Select an option"
                className="flex-auto"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <label htmlFor="" className="font-bold">
                From Date
              </label>
              <div className="flex flex-row-reverse border-2">
                <img src={calendar} alt="" className="mr-[5%]" />
                <DatePicker
                  selected={startDate}
                  showTimeInput
                  showMonthDropdown
                  showYearDropdown
                  onChange={(date) => {
                    setStartDate(date);
                    dispatch(setFromDate(date.toString()));
                    setIsCheck(false);
                  }}
                  className="w-full flex-auto p-2 focus:outline-none "
                  placeholderText="DD/MM/YYYY"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-bold">
                To Date
              </label>
              <div className="flex flex-row-reverse border-2">
                <img src={calendar} alt="" className="mr-[5%]" />
                <DatePicker
                  selected={endDate}
                  minDate={startDate}
                  showTimeInput
                  showMonthDropdown
                  showYearDropdown
                  onChange={(date) => {
                    setEndDate(date);
                    dispatch(setToDate(date.toString()));
                    setIsCheck(false);
                  }}
                  className="w-full flex-auto p-2 focus:outline-none "
                  placeholderText="DD/MM/YYYY"
                />
              </div>
            </div>
            <div className="mt-4 w-full flex justify-end">
              <button
                className="px-4 py-2 bg-[#323B4B] text-white rounded-lg"
                onClick={() => {
                  console.log(startDate);
                  if (
                    startDate !== undefined &&
                    endDate !== undefined &&
                    startDate.toString().length > 0 &&
                    endDate.toString().length > 0
                  ) {
                    setIsLoading(true);
                    getData();
                    setIsCheck(true);
                  } else {
                    showNotify();
                  }
                }}
              >
                Check
              </button>
            </div>
          </div>
        </div>
        <div className="basis-2/3 bg-[#F2F5FB] h-full rounded-lg flex flex-col justify-center items-center">
          <div className="basis-[10%]">
            <h2 className="text-xl mt-[4%]">Device Data Count</h2>
          </div>
          <div className="flex w-full justify-start px-[2%] py-4">
            <div className="w-full flex flex-row justify-between items-center gap-4">
              <div className="flex justify-start items-center border-2 px-3 py-1 rounded-full bg-[#EEEEEE]">
                <img src={Search} alt="" width={"20vmin"} className="" />
                <input
                  style={{
                    color: "black",
                    height: "30px",
                    borderColor: "black",
                    fontSize: "20px",
                    borderRadius: "5px",
                  }}
                  placeholder="Search Devices"
                  onChange={(data) => {
                    let len = data.target.value.length;
                    Data[0].items = [];
                    Data[1].items = [];
                    Data[2].items = [];
                    Data[3].items = [];
                    if (len > 0) {
                      setAllDevices(false);
                      let x = validateConvert(data.target.value);
                      console.log(x);
                    } else if (len === 0) {
                      setAllDevices(true);
                      Data[0].items = [];
                      Data[1].items = [];
                      Data[2].items = [];
                      Data[3].items = [];
                    }
                  }}
                  className="border-none focus:outline-none px-4 bg-[#eeeeee]" /*options={optionList}*/
                />
              </div>
              <div className="flex-auto">
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  ref={selectRef}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  value={value}
                  onChange={(e)=>setValue(e)}
                />
              </div>
            </div>
          </div>
          {isLoading && (
            <div className="w-full h-full flex justify-center items-center">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          )}
          {!isLoading && (
            <div className="flex-auto w-[100%] grid lg:grid-cols-5 2xl:grid-cols-6 h-full px-[5%] gap-y-2 overflow-auto">
              {allDevices &&
                devices?.map((item) => {
                  return (
                    <div
                      className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2"
                      key={item.device}
                      onClick={()=>setValue((value)=>[...value,{value:item.device,label:item.device}])}
                    >
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-left mr-8">{item.device}</p>
                        <p className="text-xl font-bold">
                          {millify(item.count)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              {!allDevices &&
                devices?.map((item) =>
                  devicesArr?.map((item1) => {
                    if (item.device === item1) {
                      console.log(item.device);
                      return (
                        <div
                          className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2"
                          key={item.device}
                        >
                          <div className="flex flex-col justify-center items-start">
                            <p className="text-left mr-8">{item.device}</p>
                            <p className="text-xl font-bold">
                              {millify(item.count)}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })
                )}
            </div>
          )}
        </div>
      </div>
      <div className="w-[80%] flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button
          className="bg-[#DFDFDF] px-4 py-2 text-[#616161] font-semibold rounded-lg"
          onClick={() => navigate("/select-datasource")}
        >
          Back
        </button>
        <button
          className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg"
          onClick={() => {
            if (
              fromDate.toString().length > 0 &&
              toDate.toString().length > 0 &&
              Option !== undefined
            ) {
              getData();
              let str="";
              value.map((item)=>{
                str=str+item.value+',';
              })
              str=str.substring(0,str.length-1)
              dispatch(setDeviceSelected(str));
              navigate("/select-devices");
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
}

export default DateSelection;

{
  /* <div className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2" key={item.device}>
<div className="flex flex-col justify-center items-start">
  <p className="text-left mr-8">{item.device}</p>
  <p className="text-xl font-bold">{millify(item.Count)}</p>
</div>
</div> */
}
