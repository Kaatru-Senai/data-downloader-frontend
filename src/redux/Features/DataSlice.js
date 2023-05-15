import {createSlice} from '@reduxjs/toolkit';

const user=localStorage.getItem('user');

export const DataSlice = createSlice({
  name: 'data',
  initialState: {
    isUser: user,
    newRequest:{
      dataSource:"",
      deviceSelected:"",
      dataFormat:"",
      dbName:"",
      from:"",
      to:""
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.isUser = action.payload;
    },
    setDataSource:(state,action)=>{
      state.newRequest.dataSource=action.payload;
    },
    setDeviceSelected:(state,action)=>{
      state.newRequest.deviceSelected=action.payload;
    },
    setDataFormat:(state,action)=>{
      state.newRequest.dataFormat=action.payload;
    },
    setDBName:(state,action)=>{
      state.newRequest.dbName=action.payload;
    },
    setFromDate:(state,action)=>{
      state.newRequest.from=action.payload;
    },
    setToDate:(state,action)=>{
      state.newRequest.to=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setDataSource,
  setDBName,
  setDataFormat,
  setDeviceSelected,
  setFromDate,setToDate
} = DataSlice.actions;

export default DataSlice.reducer;
