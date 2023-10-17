import { Space, Spin } from "antd";
import {  useSelector } from "react-redux";
const Loader = () => {
   const isLoading = useSelector((state) => state.loader.loderStatus);
   if (isLoading) {
    return(
        <Space
        direction="vertical"
        style={{
           height: "100%",
           width: "100%",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           position: "absolute",
           left: 0,
           top: 0,
             zIndex: 1000,
           backgroundColor: "rgba(33, 43, 54, 0.6)",
           position: "fixed",
           overflow: "show",
           margin: "auto",
           top: 0,
           left: 0,
           bottom: 0,
           right: 0,
        }}
     >
        <Space>
           <Spin tip="Loading" size="large"></Spin>
        </Space>
     </Space>
    )
     
   }
   return null;
};
export default Loader;
