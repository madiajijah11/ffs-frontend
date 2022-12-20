import {combineReducers} from '@reduxjs/toolkit'
// import auth from './auth'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducers from './authReducers'

const persistConfig = {
  key: "auth",
  storage
}
const reducer = combineReducers({
  auth: persistReducer(persistConfig, authReducers)
})

export default reducer