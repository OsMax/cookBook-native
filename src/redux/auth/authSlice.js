import { createSlice } from "@reduxjs/toolkit";
import { register, current, logIn, logOut } from "./authOperation";

const initialState = {
  user: { name: "", email: "", id: "", avatarURL: "" },
  token: null,
  isLogIn: false,
  loader: false,
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
        state.isLogIn = true;
        // console.log(payload.user);
        state.token = payload.token;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        if (payload.user) {
          state.user = { ...payload.user };
          state.isLogIn = true;
        }
        // state.user = { ...payload.user };
      })
      .addCase(current.rejected, (state) => {
        state.token = null;
        state.user = { ...initialState.user };
        state.isLogIn = false;
      })
      .addCase(logIn.pending, (state) => {
        state.loader = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.token = payload.token;
        state.isLogIn = true;
        state.loader = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLogIn = false;
        state.loader = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { ...initialState.user };
        state.isLogIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
