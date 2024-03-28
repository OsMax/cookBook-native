import { createSlice } from "@reduxjs/toolkit";
import { register, current, logIn, logOut } from "./authOperation";

const initialState = {
  user: { name: "", email: "", id: "" },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLogIn = true;
  //   },
  //   [login.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLogIn = true;
  //   },
  //   [logOut.fulfilled](state) {
  //     state.user = { name: '', email: '' };
  //     state.token = null;
  //     state.isLogIn = false;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.token = payload.token;
      })
      // .addCase(current.fulfilled, (state, { payload }) => {
      //   console.log(payload);
      //   // state.user = { ...payload.user };
      // })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.token = payload.token;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { ...initialState.user };
      });
  },
});

export const authReducer = authSlice.reducer;
