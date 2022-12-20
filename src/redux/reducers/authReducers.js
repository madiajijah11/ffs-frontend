import { createSlice } from "@reduxjs/toolkit";

import { register } from "../actions/authAction";

// const token = localStorage.getItem("token")
//   ? localStorage.getItem("token")
//   : null;

const initialState = {
  loading: false,
  token: "njbudvbvebbvubvbdhbvhdb",
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducer: (build) => {
    build.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(register.fulfilled, (state, action) => {
      console.log(action)
      console.log(state)
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
  },
});

export default authSlice.reducer