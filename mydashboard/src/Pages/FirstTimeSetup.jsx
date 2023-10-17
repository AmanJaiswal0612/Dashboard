import { Button, Card, Col, Form, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { PasswordInput, TextInput } from "../Components/QbStrap";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import styles from "../css/login.module.css";
import qbIcon from "../assets/logos/QB-logo.png";
import posMachine from "../assets/images/pos-illustration.png";
import qbIconSmall from "../assets/images/QB.png";
import sideImage from "../assets/images/firstTimeSetUp.svg";
import { useDispatch } from "react-redux";
import { createTableForSetup, setUpUser } from "../redux/slices/setUpSlice";
import { Link, useNavigate } from "react-router-dom";
const FirstTimeSetup = () => {
   const [loginPayload, setLoginPayload] = useState({
      username: "",
      password: "",
      ipaddress: ""
   });
   const dispatch = useDispatch()
   const navigate= useNavigate()
   const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginPayload({ ...loginPayload, [name]: value });
   };



   // const userNameValidtor = (_, value) => {
   //    if (!value) {
   //       return Promise.resolve(); // Resolved promise for empty value (no validation required)
   //    }
   //    if (value.length < 6) {
   //       return Promise.reject("Username must contain at 6 letter.");
   //    }
   //    return Promise.resolve();
   // };

   const validateIPAddress = (_, value) => {
    // Validate IP address format
    if (!value) {
        return Promise.resolve(); // Resolved promise for empty value (no validation required)
     }
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(value)) {
      return Promise.reject('Please enter a valid IP address.');
    }
    return Promise.resolve();
  };

  const handleSubmit = (values) =>{
   dispatch(createTableForSetup(values)).then((res)=>{
      if(res){
         dispatch(setUpUser(values)).then((res)=>{
            if(res) navigate("/")
         })
      } 
   })
  }

   return (
      <div className={styles.mainBoxFirstTimeSetuP}>
         <div></div>
         <div className={styles.formBox}>
            <Card
               style={{
                  width: "65%",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "none",
               }}
            >
               <Form layout="vertical" onFinish={handleSubmit}>
                  <img src={qbIconSmall}></img>
                  <p className={styles.loginCred}>Set up</p>
                  <p className={styles.loginDesc}>Please enter details to set up your app</p>
                  <TextInput
                     name="userName"
                     placeholder="Username"
                     value={loginPayload.username}
                     prefix={<UserOutlined className="site-form-item-icon" />}
                     styles={{ width: "100%", height: "45px", fontSize: "16px" }}
                     onChange={handleChange}
                     required={true}
                     validationMessage={"Please Enter UserName"}
                     // validator={userNameValidtor}
                  />
                  <PasswordInput
                     name="password"
                     placeholder="Password"
                     styles={{ width: "100%", height: "45px", fontSize: "16px" }}
                     value={loginPayload.password}
                     onChange={handleChange}
                  />
                  <TextInput
                     name="IPAddress"
                     placeholder="IP Address"
                     value={loginPayload.ipaddress}
                     styles={{ width: "100%", height: "45px", fontSize: "16px" }}
                     onChange={handleChange}
                     required={true}
                     validationMessage={"Please Enter IP Address"}
                     validator={validateIPAddress}
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
                     Continue
                  </Button>
               </Form>
               <div className={styles.loginDesc}>Already setup? &nbsp; <Link to="/login">Login</Link></div>
            </Card>
         </div>
      </div>
   );
};

export default FirstTimeSetup;
