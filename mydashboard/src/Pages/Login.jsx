import { Button, Card, Col, Form, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { PasswordInput, TextInput } from "../Components/QbStrap";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import styles from "../css/login.module.css";
import qbIcon from "../assets/logos/QB-logo.png";
import posMachine from "../assets/images/pos-illustration.png";
import qbIconSmall from "../assets/images/QB.png";
import googlePlayStore from "../assets/images/google-play.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../redux/slices/setUpSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
   const dispatch = useDispatch();
   const checkLoginLoading = useSelector((state) => state.user.checkLoginLoading);

   // const userNameValidtor = (_, value) => {
   //    if (!value) {
   //       return Promise.resolve(); // Resolved promise for empty value (no validation required)
   //    }
   //    if (value.length < 6) {
   //       return Promise.reject("Username must contain at 6 letter.");
   //    }
   //    return Promise.resolve();
   // };

   const navigate = useNavigate();

   const handleSubmit = (values) => {
      console.log(values);
      dispatch(loginUser(values)).then((res) => {
         if(res?.payload) navigate("/");
      });
   };

   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   if (checkLoginLoading) {
      return <h1></h1>;
   }

   return (
      <div className={styles.loginpage}>
         <div className={styles.gradientBox}>
            <div className={styles.qbIconBox}>
               <img src={qbIcon} alt="qbIcon" />
            </div>
            <div className={styles.posMachine}>
               <img src={posMachine} className={styles.posMachine}></img>
            </div>
            <div
               className="f_36B"
               style={{ marginTop: "30px", fontSize: "36px", fontWeight: "bold" }}
            >
               Point of sale now made easy!
            </div>
            <div
               className="f_24B"
               style={{ padding: "18px 0px 40px", fontSize: "24px", fontWeight: "bold" }}
            >
               A dependable POS system for your small or big business. Engage with your customers
               like never before.
            </div>
            <a
               href="https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos"
               target="_blank"
            >
               {" "}
               <img src={googlePlayStore} />{" "}
            </a>
         </div>
         <div className={styles.formBox}>
            <Card
               style={{
                  width: "65%",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "none",
               }}
            >
               <Form layout="vertical" onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
                  <img src={qbIconSmall}></img>
                  <p className={styles.loginCred}>Login</p>
                  <p className={styles.loginDesc}>Please enter your credentials to login</p>
                  <TextInput
                     name="userName"
                     placeholder="Username"
                     prefix={<UserOutlined className="site-form-item-icon" />}
                     styles={{ width: "100%", height: "45px", fontSize: "16px" }}
                     required={true}
                     validationMessage={"Please Enter UserName"}
                     // validator={userNameValidtor}
                  />
                  <PasswordInput
                     name="password"
                     placeholder="Password"
                     styles={{ width: "100%", height: "45px", fontSize: "16px" }}
                  />
                  <Button
                     style={{
                        width: "100%",
                        height: "45px",
                        backgroundColor: "#498bdc",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "600",
                        border: "1px solid #3a6fb0",
                     }}
                     htmlType="submit"
                     type="primary"
                     ghost
                  >
                     Login
                  </Button>
               </Form>
               <div className={styles.loginDesc}>
                  Haven't setup? <Link to="/firsttimesetup">Set up</Link>
               </div>
            </Card>
         </div>
      </div>
   );
};

export default Login;
