import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/Progress_bar/ProgressBar";
import calendar from "../assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Search from "../assets/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDBName, setFromDate, setToDate } from "../redux/Features/DataSlice";
import { getDatabaseList, getDeviceStats, getMarkers } from "../Mock_Backend/server";
import millify from "millify";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import DatabaseIcon from "../assets/database.svg";
import Dropdown from 'react-dropdown';


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
  const [options,setoptions] = useState([]); 
  const [Option,SetOption] = useState(options[0]?.dbname);
  console.log(Option)
  const fromDate=useSelector((state)=>state.data.newRequest.from);
  const toDate=useSelector((state)=>state.data.newRequest.to);
  const showNotify = () => toast('Select the Database and From and To Dates...');
  const backend = useSelector((state) => state.data.backend);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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
  const getData=async()=>{
    setAllDevices(true);
    if (!backend) {
      const deviceStats = await getDeviceStats();
        console.log(deviceStats);
        setDevices(deviceStats);
    }
    else{
      console.log("main implementation");
    }
  }
  const SetDB=(e)=>{
    dispatch(setDBName(e.value))
    SetOption(e);
  }
  useEffect(() => {
    //Mock Backend
    const getData = async () => {
      if (!backend) {
        const data = await getMarkers();
        const dbList = await getDatabaseList();
        dbList.map((item)=>{
            setoptions(options=>[...options,item.dbname])
        })
        const markersArr = [];
        data.map((item) => {
          // setMarkers((markers) => [
          //   ...markers,
          //   [item.value.lat, item.value.long],
          // ]);
          markersArr.push([item.value.lat, item.value.long]);
        });
        console.log(markersArr);
        setMarkers(markersArr);
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
              className="w-auto px-2 py-2 bg-[#323B4B] rounded-lg text-white font-bold"
              onClick={() => navigate("/map", { state: { markers } })}
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
            <Dropdown options={options} onChange={(e)=>SetDB(e)} value={Option} placeholder="Select an option" className="flex-auto"/>
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
                  onChange={(date) => {setStartDate(date);dispatch(setFromDate(date))}}
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
                  onChange={(date) => {setEndDate(date);dispatch(setToDate(date))}}
                  className="w-full flex-auto p-2 focus:outline-none "
                  placeholderText="DD/MM/YYYY"
                />
              </div>
            </div>
            <div className="mt-4 w-full flex justify-end">
              <button className="px-4 py-2 bg-[#323B4B] text-white rounded-lg" onClick={()=>{
                if(startDate!==undefined && endDate!==undefined){
                  getData();
                }
                else{
                  showNotify();
                }
                }}>
                Check
              </button>
            </div>
          </div>
        </div>
        <div className="basis-2/3 bg-[#F2F5FB] h-full rounded-lg flex flex-col justify-center items-center">
          <div className="basis-[10%]">
            <h2 className="text-xl mt-[4%]">Device Data Count</h2>
          </div>
          <div className="flex w-full justify-start ml-[10%] py-4">
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
          </div>
          <div className="flex-auto w-[100%] grid lg:grid-cols-5 2xl:grid-cols-6 h-full px-[5%] gap-y-2 overflow-auto">
            {allDevices &&
              devices?.map((item) => {
                return (
                  <div
                    className="h-24 bg-[#323b4b] rounded-lg flex justify-center items-center flex-col text-white mr-2"
                    key={item.device}
                  >
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-left mr-8">{item.device}</p>
                      <p className="text-xl font-bold">{millify(item.count)}</p>
                    </div>
                  </div>
                );
              })}
            {!allDevices &&
              devices?.map((item) => (
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
              ))}
          </div>
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
            if(fromDate.toString().length > 0 && toDate.toString().length > 0 && Option!==undefined){
              navigate("/select-devices");
            }
            else{
              showNotify();
            }
          }}
        >
          Continue
        </button>
      </div>
      <ToastContainer position='top-right' closeOnClick autoClose={false}/>
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
