import { createReducer } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authReducer = createReducer( initialState,{
    [register.fulfilled]: ({ user, token, isLoggedIn }, { payload }) => {
        user = payload.user;
        token = payload.token;
        isLoggedIn =payload.isLoggedIn;
    },
    [logIn.fulfilled]: ({ user, token, isLoggedIn }, { payload }) => {
        user = payload.user;
        token = payload.token;
        isLoggedIn = payload.isLoggedIn;
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


