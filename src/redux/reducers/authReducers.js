import { createSlice } from "@reduxjs/toolkit";

import {
  registerEmployee,
  registerRecruiter,
  LoginRecruiter,
} from "../actions/authAction";

const initialState = {
  loading: false,
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (build) => {
    build.addCase(LoginRecruiter.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(LoginRecruiter.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(LoginRecruiter.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });

    build.addCase(registerEmployee.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(registerEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(registerEmployee.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
    build.addCase(registerRecruiter.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(registerRecruiter.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(registerRecruiter.fulfilled, (state, action) => {
      console.log(action);
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
