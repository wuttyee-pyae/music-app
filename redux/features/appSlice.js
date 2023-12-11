import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: false,
  token: ''
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        state.auth = action.payload;
    },
    setToken: (state, action) => {
        state.token = action.payload;
    },
  },
});

export const { setAuth, setToken } = appSlice.actions;

export default appSlice.reducer;
