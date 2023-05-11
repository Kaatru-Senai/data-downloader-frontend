import {createSlice} from '@reduxjs/toolkit';

const user=localStorage.getItem('user');

export const DataSlice = createSlice({
  name: 'data',
  initialState: {
    isUser: user,
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
