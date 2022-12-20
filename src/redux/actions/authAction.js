import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerEmployee = createAsyncThunk(
  "auth/registerEmployee",
  async (
    { fullName, email, phoneNumber, password, confirmPassword, cb },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:8888/auth/registerEmployee",
        { fullName, email, phoneNumber, password, confirmPassword },
        config
      );
      cb();
      return res.data.results.token;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const registerRecruiter = createAsyncThunk(
  "auth/registerRecruiter",
  async (
    { fullName, email, phoneNumber, password, confirmPassword, companyName, companyField, cb },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:8888/auth/registerRecruiter",
        { fullName, email, phoneNumber, password, confirmPassword, companyName, companyField },
        config
      );
      cb();
      return res.data.results.token;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
