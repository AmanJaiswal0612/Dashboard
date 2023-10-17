import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axiosClient";
import { showNotification } from "../../utils/qbUtility";
import { haltLoader, initLoader } from "./loaderSlice";

const initialState = {
   users:[]
};



export const getUserList = createAsyncThunk("users/users", async (payload, { dispatch }) => {
   try {
      dispatch(initLoader());
      const response = await axiosClient.get("/foodCourt/users", payload);
      dispatch(haltLoader());
      return response.data;
   } catch (e) {
      dispatch(haltLoader());
      console.log(e);
      return false;
   }
});

const setUpSlice = createSlice({
   name: "users",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getUserList.pending, (state) => {
            // state.loading=false;
            // state.setUp=true;
         })
         .addCase(getUserList.fulfilled, (state, { payload }) => {
            if (payload) {
               state.loading = false;
               state.setUp = true;
            }
         })
         .addCase(getUserList.rejected, (state, { payload }) => {
            debugger;
            // state.loading=false;
            // state.setUp=true;
         })
   },
});

export default setUpSlice.reducer;