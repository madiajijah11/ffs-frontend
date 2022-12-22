import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginRecruiter = createAsyncThunk(
  "auth/loginRecruiter",
  async ({ email, password, cb }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/loginRecruiter`,
        { email, password },
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

export const LoginEmployee = createAsyncThunk(
  "auth/loginEmployee",
  async ({ email, password, cb }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/loginEmployee`,
        { email, password },
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
        `${process.env.REACT_APP_API_URL}/auth/registerEmployee`,
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
    {
      fullName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      companyName,
      companyField,
      cb,
    },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/registerRecruiter`,
        {
          fullName,
          email,
          phoneNumber,
          password,
          confirmPassword,
          companyName,
          companyField,
        },
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

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, cb }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password },
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
