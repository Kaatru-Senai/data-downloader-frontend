import { createSlice } from "@reduxjs/toolkit";

const user = sessionStorage.getItem("user");
let LocalState = sessionStorage.getItem("persistantState")
LocalState=JSON.parse(LocalState)
// console.log(LocalState.data.newRequest.dataSource);
export const DataSlice = createSlice({
  name: "data",
  initialState: {
    isUser: user,
    newRequest: {
      dataSource: (LocalState?.data?.newRequest.dataSource?LocalState.data.newRequest.dataSource:"DD"),
      deviceSelected: (LocalState?.data?.newRequest.deviceSelected?LocalState.data.newRequest.deviceSelected:""),
      dataFormat: (LocalState?.data.newRequest.dataFormat?LocalState.data.newRequest.dataFormat:"JSON"),
      dbName: (LocalState?.data.newRequest.dbName?LocalState.data.newRequest.dbName:""),
      from: (LocalState?.data.newRequest.from?LocalState.data.newRequest.from:""),
      to: (LocalState?.data.newRequest.to?LocalState.data.newRequest.to:""),
      devices:(LocalState?.data.newRequest.devices?LocalState.data.newRequest.devices:"")
    },
    jobId:(LocalState?.data.jobId?LocalState.data.jobId:""),
    countData:(LocalState?.data.countData?LocalState.data.countData:null),
    backend: true
  },
  reducers: {
    setUser: (state, action) => {
      state.isUser = action.payload;
      if(action.payload==false){
        state.newRequest={
          dataSource:"DD",
          deviceSelected:"",
          dataFormat:"JSON",
          dbName:"",
          from:"",
          to:"",
          devices:""
        }
        state.countData=null;
        state.jobId=""
      }
    },
    setDataSource: (state, action) => {
      state.newRequest.dataSource = action.payload;
    },
    setCountData:(state,action)=>{
      state.countData=action.payload;
    },
    setJobID:(state,action)=>{
      state.jobId=action.payload;
    },
    setDeviceSelected: (state, action) => {
      state.newRequest.deviceSelected = action.payload;
    },
    setDevicesList:(state,action)=>{
      state.newRequest.devices=action.payload;
    },
    setDataFormat: (state, action) => {
      state.newRequest.dataFormat = action.payload;
    },
    setDBName: (state, action) => {
      state.newRequest.dbName = action.payload;
    },
    setFromDate: (state, action) => {
      state.newRequest.from = action.payload;
    },
    setToDate: (state, action) => {
      state.newRequest.to = action.payload;
    },
    setJobData: (state, action) => {
      state.newRequest.dataFormat = action.payload.dataFormat;
      state.newRequest.from = action.payload.from;
      state.newRequest.to = action.payload.to;
      state.newRequest.dbName = action.payload.dbName;
      state.newRequest.deviceSelected = action.payload.deviceSelected;
      state.newRequest.dataSource = action.payload.dataSource;
    },
    // logout:(state,action)=>{
      
    // }
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setCountData,
  setDataSource,
  setDBName,
  setDataFormat,
  setDeviceSelected,
  setFromDate,
  setToDate,
  setJobData,
  setDevicesList,
  setJobID
} = DataSlice.actions;

export default DataSlice.reducer;
