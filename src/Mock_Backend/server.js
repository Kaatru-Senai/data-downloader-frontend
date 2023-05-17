import { response } from "./data";
import { databaseList } from "./databaselist";
import { deviceCount } from "./deviceCount";


export const getMarkers = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100);
    return response;
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



