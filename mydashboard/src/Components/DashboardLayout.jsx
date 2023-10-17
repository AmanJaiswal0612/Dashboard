import React, { Fragment, useEffect, useState } from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Layout, Menu, Popover, Row, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BreadcrumbNav } from "./QbStrap.jsx";
import { getPath, moduleitems, modules } from "./breadcrumb_nav.js";
import userAvtar from "../assets/icons/userAvtar.svg";
import whiteQbLogo from "../assets/logos/QB-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setModule, setSubModule, toggleSideBar } from "../redux/slices/moduleSlice.js";
import { logoutUser } from "../redux/slices/setUpSlice.js";
import hb from "../assets/icons/hexagon.png";
const { Header, Content, Sider } = Layout;

const DashboardLayout = () => {
   const {
      token: { colorBgContainer },
   } = theme.useToken();
   const location = useLocation();
   const navigate = useNavigate();
   const pathName = getPath(location.pathname);
   const [selectedKeys, setSelectedKeys] = useState(["sub1"]);
   const { module, subModule , sideBarToogleStatus } = useSelector((state) => state.module);
   const dispatch = useDispatch();
   useEffect(() => {
      // let screenWidth= window.screen.width;
      // if(screenWidth<900){
      //    dispatch(toggleSideBar())
      // }
   }, []);

   const handleMenuOpenChange = (keys) => {
      if (keys.length) {
         let newKeys = [keys[keys.length - 1]];
         dispatch(setModule(newKeys));
      }
   };




   console.log(moduleitems, "ite");
   const content = (
      <div>
         <p>User Information</p>
         {/* Add more user info elements here */}
         <Button
            onClick={() => {
               dispatch(logoutUser());
            }}
         >
            Sign Out
         </Button>
      </div>
   );
   return (
      <Layout style={{ height: "100vh" }}>
         <Header
            style={{
               display: "flex",
               alignItems: "center",
               background: 'rgb(4,4,64)',
               color:'#fff',
               height: "50px",
               justifyContent: "space-between",
               padding:'30px',
               paddingLeft:"20px",
            }}
         >
            {/* <div className="demo-logo" ><img src={whiteQbLogo} style={{height:'80%',width:'auto',border:'1px solid red'}} alt="Queuebuster" /></div> */}
            <div
             style={{
               display: 'flex',
               // justifyContent: 'space-between',
           
               alignItems: 'center',
               // width: '224px'
             }}
            >
               <img src={hb} style={{ width:'40px', height:'40px' , cursor:'pointer', marginRight:'10px' }} alt="hb"  />
               <BreadcrumbNav path={pathName} style={{color:'white'}} />
            </div>
            <Popover content={content} placement="bottomRight" trigger="click">
               <Avatar src={userAvtar} alt="user" />
            </Popover>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items1} /> */}
         </Header>
         <Layout>
            <Sider
               width={sideBarToogleStatus?"3%":"18%"}
               style={{
                  background: 'rgb(4,4,64)',
               }}
            >
               <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  style={{
                     height: "100%",
                     borderRight: 0,
                     padding: "30px 7.7% 30px 0%",
                     fontSize: "16px",
                     background: 'rgb(4,4,64)',
                     color:'#fff'
                  }}
                  defaultOpenKeys={["sub1"]}
                  openKeys={module}
                  onOpenChange={handleMenuOpenChange}
                  selectedKeys={subModule}
               >
                  {moduleitems.map((item) => (
                     <Menu.SubMenu
                        key={item.key}
                        icon={item.icon}
                        title={item.label}
                        style={{ display: item.hidden ? "none" : "block", marginBottom: "25px",color:'white' }}
                        onTitleClick={() => {
                           const selectedItems = [item.key];
                           if (item.children.length) {
                              // checking if subModule is present, preselct first sub module.
                              const firstSubmoduleKey = item.children[0].key;
                              selectedItems.push(firstSubmoduleKey);
                           }
                           dispatch(setSubModule(selectedItems)); //for setting text color of module
                           // setSelectedKeys(selectedItems);
                           navigate(item.url); //Navigate to respected -(module-submodule-route)
                        }}
                     >
                        {item.children &&
                           item.children.map((child) => {
                              return (
                                 <Menu.Item
                                    style={{
                                       display: child.hidden ? "none" : "block",
                                       fontSize: "14px",
                                    }}
                                    key={child.key}
                                 >
                                    <Link
                                       onClick={() => {
                                          dispatch(setSubModule([child.key])); //for setting text color of sub-module
                                          // setSelectedKeys([child.key]);
                                       }}
                                       to={child.url}
                                    >
                                       {child.label}
                                    </Link>
                                 </Menu.Item>
                              );
                           })}
                     </Menu.SubMenu>
                  ))}
               </Menu>
            </Sider>
            <Layout
               style={{
                  padding: "0 24px 24px",
                  background:'#F2F5F7'
               }}
            >
               <BreadcrumbNav path={pathName} />
               <Content
                  style={{
                     padding: 24,
                     margin: 0,
                     overflowY: "scroll",
                     overflowX: "hidden",
                     // background: colorBgContainer,
                     background:'#F2F5F7'
                  }}
               >
                  <Outlet />
               </Content>
            </Layout>
         </Layout>
      </Layout>
   );
};
export default DashboardLayout;
