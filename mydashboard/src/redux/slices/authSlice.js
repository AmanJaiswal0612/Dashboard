// import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
// import axiosClient from '../../utils/axiosClient'



// const initialState = {
//    loading:false,
//    user:[],
//    error:'',
//    login:false
// }

// const loginUser= createAsyncThunk('user/login',()=>{
//   return axiosClient.post('login')
//   .then((response)=>response)
// })

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: (builder)=>{
//     builder.addCase(loginUser.pending,(state)=>{
//       state.loading=true
//     })
//     builder.addCase(loginUser.fulfilled,(state,action)=>{
//       state.loading=false,
//       state.user=action.payload,
//       state.error= ''
//     })
//     builder.addCase(loginUser.rejected,(state,action)=>{
//       state.loading=false
//       state.user=[]
//       state.error=action?.error?.message?action?.error?.message:"Error While  Login"
//     })
//   },
//   // reducers: {
//   //   login: (state) => {
//   //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
//   //     // doesn't actually mutate the state because it uses the Immer library,
//   //     // which detects changes to a "draft state" and produces a brand new
//   //     // immutable state based off those changes
//   //     state.login = true;
//   //   },
//   //   logout: (state) => {
//   //     state.login = false;
//   //   },
//   // },
// })

// // Action creators are generated for each case reducer function
// export const { login, logout } = authSlice.actions

// export default authSlice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   login:false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.login = true;
    },
    logout: (state) => {
      state.login = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer