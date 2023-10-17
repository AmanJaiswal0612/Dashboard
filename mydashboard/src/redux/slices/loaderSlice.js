import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loaderCount: 0,
   loderStatus: false,
};

export const loaderSlice = createSlice({
   name: "loader",
   initialState,
   reducers: {
      initLoader: (state) => {
         state.loderStatus = true;
         state.loaderCount = state.loaderCount + 1;
      },
      haltLoader: (state) => {
         state.loaderCount = state.loaderCount - 1;
         if (state.loaderCount <= 0) {
            state.loderStatus = false;
         }
      },
   },
});

// Action creators are generated for each case reducer function
export const { initLoader, haltLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
