import React from "react";
import { useNavigate } from "react-router-dom";
import { Btn, PageHeader } from "../../Components/QbStrap";

const Users = () => {
   const navigate = useNavigate();

   return (
      <div>
         <PageHeader
            margin={"30px 0 40px 0"}
            title={`Users`}
            description={
               <div style={{ color: "#7b7f82" }}>
                  List of all Users.
                  <a href="https://queuebuster.co/help" target="_blank">
                     &nbsp;Need Help?
                  </a>
               </div>
            }
            buttons={[
               <>
                  <Btn 
                  text="Create User" 
                  style={{ marginLeft: "15px" }} 
                  onClick={() => {navigate("/users/create")}}
                  />
               </>,
            ]}
         />
         <button style={{ marginLeft: "200px" }} onClick={() => {navigate("/users/create")}}>
            Create
         </button>
         <button style={{ marginLeft: "200px" }} onClick={() => [navigate("/users/edit")]}>
            Edit
         </button>
      </div>
   );
};

export default Users;
