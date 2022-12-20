import { createSlice } from "@reduxjs/toolkit";
import {loginAction} from "../actions/auth"
const initialState = {
  token: null
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (build)=> {
    build.addCase(loginAction.fulfilled, (state, {payload})=> {
      state.token = payload
    })
  }
})

export const {login} = authReducer.actions
export default authReducer.reducer