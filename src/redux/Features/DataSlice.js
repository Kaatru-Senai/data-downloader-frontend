import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");

export const DataSlice = createSlice({
  name: "data",
  initialState: {
    isUser: user,
    newRequest: {
      dataSource: "",
      deviceSelected: null,
      dataFormat: "JSON",
      dbName: "",
      from: "",
      to: "",
    },
    backend: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.isUser = action.payload;
    },
    setDataSource: (state, action) => {
      state.newRequest.dataSource = action.payload;
    },
    setDeviceSelected: (state, action) => {
      state.newRequest.deviceSelected = action.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setDataSource,
  setDBName,
  setDataFormat,
  setDeviceSelected,
  setFromDate,
  setToDate,
  setJobData
} = DataSlice.actions;

export default DataSlice.reducer;
