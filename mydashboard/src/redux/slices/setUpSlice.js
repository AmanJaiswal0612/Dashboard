import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axiosClient";
import { showNotification } from "../../utils/qbUtility";
import { haltLoader, initLoader } from "./loaderSlice";

const initialState = {
   loading: false,
   login: false,
   checkLoginLoading: false,
   setUp: true,
   auth: {},
   error: "",
};

export const checkLogin = createAsyncThunk("user/checklogin", async (_, { dispatch }) => {
   try {
      dispatch(initLoader());
      const response = await axiosClient.get("/foodCourt/checkLogin");
      dispatch(haltLoader());
      return response.data;
   } catch (e) {
      dispatch(haltLoader());
      console.log(e);
      return false;
   }
});

export const setUpUser = createAsyncThunk("user/setup", async (payload, { dispatch }) => {
   try {
      dispatch(initLoader());
      const response = await axiosClient.post("/foodCourt/setup", payload);
      dispatch(haltLoader());
      showNotification({ type: "success", message: "Setup Done, Please Login" });
      return response.data;
   } catch (e) {
      dispatch(haltLoader());
      showNotification({
         type: "error",
         message: "Error While Setup, Please Contact Support Team",
      });
      console.log(e);
      return false;
   }
});

export const createTableForSetup = createAsyncThunk(
   "user/createTable",
   async (payload, { dispatch }) => {
      try {
         dispatch(initLoader());
         const response = await axiosClient.post("/foodCourt/createTables", payload);
         dispatch(haltLoader());
         return response.data;
      } catch (e) {
         dispatch(haltLoader());
         showNotification({
            type: "error",
            message: "Error While Setup, Please Contact Support Team",
         });
         console.log(e);
         return false;
      }
   }
);

export const loginUser = createAsyncThunk("user/login", async (payload, { dispatch }) => {
   try {
      dispatch(initLoader());
      const response = await axiosClient.post("/foodCourt/login", payload);
      dispatch(haltLoader());
      showNotification({ type: "success", message: "Login Successful" });
      return response.data;
   } catch (e) {
      dispatch(haltLoader());
      showNotification({ type: "error", message: "Invalid Username / Password" });
      console.log(e);
      return false;
   }
});

export const logoutUser = createAsyncThunk("user/logout", async (payload, { dispatch }) => {
   try {
      dispatch(initLoader());
      const response = await axiosClient.get("/foodCourt/logout", payload);
      dispatch(haltLoader());
      return response.data;
   } catch (e) {
      dispatch(haltLoader());
      console.log(e);
      return false;
   }
});

const setUpSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(setUpUser.pending, (state) => {
            // state.loading=false;
            // state.setUp=true;
         })
         .addCase(setUpUser.fulfilled, (state, { payload }) => {
            if (payload) {
               state.loading = false;
               state.setUp = true;
            }
         })
         .addCase(setUpUser.rejected, (state, { payload }) => {
            debugger;
            // state.loading=false;
            // state.setUp=true;
         })

         .addCase(checkLogin.pending, (state) => {
            state.checkLoginLoading = true;
         })
         .addCase(checkLogin.fulfilled, (state, { payload }) => {
            state.checkLoginLoading = false;
            if (payload && payload.setup == false) {
               state.setUp = false;
               state.error = false;
            }
            if (payload?.setup && payload.login) {
               state.auth = payload.sessionData;
               state.login = true;
               state.error = false;
            }
         })
         .addCase(checkLogin.rejected, (state, action) => {
            state.checkLoginLoading = false;
            state.error = true;
         })

         .addCase(loginUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(loginUser.fulfilled, (state, { payload }) => {
            if (payload.status) {
               state.auth = payload;
               state.login = true;
            }
            state.loading = false;
            state.error = false;
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.error = true;
         })

         .addCase(logoutUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(logoutUser.fulfilled, (state, { payload }) => {
            state.auth = {};
            state.login = false;
            state.error = false;
         })
         .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
         });
   },
});

export default setUpSlice.reducer;
