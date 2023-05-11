import {createSlice} from '@reduxjs/toolkit';

export const DataSlice = createSlice({
  name: 'data',
  initialState: {
    isUser: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.isUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
} = DataSlice.actions;

export default DataSlice.reducer;
