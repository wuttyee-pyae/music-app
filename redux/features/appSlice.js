import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: null,
  token: null 
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      console.log(" --  app slice -- ",action.payload)
        state.auth = action.payload;
    },
    setToken: (state, action) => {
        state.token = action.payload;
    },
  },
});

export const { setAuth, setToken } = appSlice.actions;

export default appSlice.reducer;


