import { createSlice } from "@reduxjs/toolkit";
import { register, current, logIn, logOut, editUser } from "./authOperation";

const initialState = {
  user: { name: "", email: "", id: "", avatarURL: "" },
  token: null,
  isLogIn: false,
  loader: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // register
      .addCase(register.pending, (state) => {
        state.loader = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.isLogIn = true;
        state.token = payload.token;
        state.loader = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLogIn = false;
        state.loader = false;
      })
      // edit
      .addCase(editUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        if (payload.user) {
          state.user = { ...payload.user };
          state.isLogIn = true;
          state.loader = false;
        }
      })
      // current
      .addCase(current.pending, (state) => {
        state.loader = true;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        if (payload.user) {
          state.user = { ...payload.user };
          state.isLogIn = true;
          state.loader = false;
        }
      })
      .addCase(current.rejected, (state) => {
        state.token = null;
        state.user = { ...initialState.user };
        state.isLogIn = false;
        state.loader = false;
      })
      // login
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
