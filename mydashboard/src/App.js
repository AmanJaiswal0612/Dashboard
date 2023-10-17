import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "./Components/DashboardLayout";
import Login from "./Pages/Login";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { checkLogin } from "./redux/slices/setUpSlice";
import FirstTimeSetup from "./Pages/FirstTimeSetup";
import Loader from "./Components/Loader";

const App = () => {
   const isLogin = useSelector((state) => state.user.login);
   const isSetup = useSelector((state) => state.user.setUp);
   const checkLoginError = useSelector((state) => state.user.checkLoginError);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   // debugger
   // setupInterceptors(navigate)
   useEffect(() => {
      dispatch(checkLogin());
   }, []);

   return (
      <Fragment>
         <DashboardLayout/>
         {/* {Boolean(!isSetup)&&Boolean(!checkLoginError) ? (
            <FirstTimeSetup />
         ) : Boolean(!isLogin) ? (
            <Login />
         ) : (
            <DashboardLayout />
         )} */}
         <Loader/>
      </Fragment>
   );
};

export default App;
