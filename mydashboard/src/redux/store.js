import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import setUpSlice from './slices/setUpSlice'
import moduleSlice from './slices/moduleSlice'
import loaderSlice from './slices/loaderSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    user:setUpSlice,
    module:moduleSlice,
    loader:loaderSlice
  },
  devTools:true
})