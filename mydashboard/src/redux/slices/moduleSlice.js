import { createSlice } from "@reduxjs/toolkit";
import { modules, moduleitems } from "../../Components/breadcrumb_nav";

let module = [];
let subModule = [];



for (let i = 0; i < moduleitems.length; i++) {
   if (window.location.pathname == moduleitems[i].url) {
      module.push(moduleitems[i].key);
      subModule.push(moduleitems[i].key);
      moduleitems[i].children.map((el) => {
         if (el.url == window.location.pathname) {
            subModule.push(el.key);
         }
      });
   } else {
      let children = moduleitems[i].children;
      for (let j = 0; j < children.length; j++) {
         if (window.location.pathname == children[j].url) {
            module.push(moduleitems[i].key);
            subModule.push(moduleitems[i].key);
            if (children[j].hidden && children[j - 1]) {
               subModule.push(children[j - 1].key);
            } else {
               subModule.push(children[j].key);
            }
         }else{
            let childrenNext = children[j]?.children;
            for(let k = 0;k<childrenNext?.length ; k++){
               if(window.location.pathname == childrenNext[k].url){
                  module.push(moduleitems[i].key);
                  subModule.push(children[j].key);
               }
            }
         }
      }
   }
}

const initialState = {
   module,
   subModule,
   sideBarToogleStatus:false,
};

console.log(window.location, "AmanWindowLoacation");

export const moduleSlice = createSlice({
   name: "module",
   initialState,
   reducers: {
      setModule: (state, { payload }) => {
         state.module = payload;
      },
      setSubModule: (state, { payload }) => {
         state.subModule = payload;
      },
      toggleSideBar: (state) =>{
         state.sideBarToogleStatus= !state.sideBarToogleStatus;
      }
   },
});

export const { setModule, setSubModule, toggleSideBar } = moduleSlice.actions;

export default moduleSlice.reducer;
