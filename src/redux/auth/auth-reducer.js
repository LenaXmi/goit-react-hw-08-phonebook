import { createReducer } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authReducer = createReducer(initialState, {
  [register.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = payload.isLoggedIn;
  },
  [logIn.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logOut.fulfilled]: (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },
  [fetchCurrentUser.pending]: (state) => {
    state.isRefreshing = true;
  },
  [fetchCurrentUser.fulfilled]: (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  },
  [fetchCurrentUser.rejected]: (state) => {
    state.isRefreshing = false;
  },
});

export default authReducer;
