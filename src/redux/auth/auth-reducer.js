import { createReducer, createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authReducer = createReducer( initialState,{
    [register.fulfilled]: (state, { payload }) => {
     
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn =payload.isLoggedIn;
    },
    [logIn.fulfilled]: (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
    },
    [logOut.fulfilled]: ({ user, token, isLoggedIn }, action) => {
        user = { name: null, email: null };
        token = null;
        isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled]: ({ user, isLoggedIn }, { payload }) => {
        user = payload;
        isLoggedIn = true;
    }

}
    
)

export default authReducer

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [fetchCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//     },
//   },
// });

// export default authSlice.reducer;

