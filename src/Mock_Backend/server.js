import { response } from "./data";
import { databaseList } from "./databaselist";
import { deviceCount } from "./deviceCount";
import { history } from "./history";
import { jobDetails } from "./jobId";


export const getMarkers = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100);
    return response;
};

export const getFile = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(10000);
    return response;
};

export const getHistory = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000);
    return history;
};

export const getJobIdData = async (id) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000);
    if(jobDetails.job_id===id){
        return jobDetails
    }
    else{
        return {
            status:500,
            error:"error here!..."
        };
    }
};

export const getDeviceStats = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100);
    return deviceCount;
};

export const getDatabaseList = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100);
    return databaseList;
};

export const getAllDevices = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100);
    return deviceCount;
};

export const getAllMobileDevices = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(100);
  // const regex = new RegExp(/^[M]\d/, 'g');
  const finalData=deviceCount.filter((item)=>{
      return (/^[M]\d/.test(item.device));
  })
  console.log(finalData)
  return finalData;
};
export const getAllStationaryDevices = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(100);
  // const regex = new RegExp(/^[M]\d/, 'g');
  const finalData=deviceCount.filter((item)=>{
      return (/^[S]\d/.test(item.device));
  })
  console.log(finalData)
  return finalData;
};



