import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import Notiflix from "notiflix";
// Notiflix.Notify.init({
//   width: "480px",
//   position: "right-bottom",
//   distance: "10px",
//   opacity: 1,
//   fontSize: "20px",
//   clickToClose: true,
//   timeout: 3000,
//   background: "#4f2ee8",
// });

// axios.defaults.baseURL = "https://cookbook-t2ch.onrender.com";
axios.defaults.baseURL = "http://localhost:3000";

const tokenSet = (token) => {
  axios.defaults.headers.common.authorization = token;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credential) => {
    // console.log(credential);
    try {
      const { data } = await axios.post("/api/users/register", credential);
      tokenSet(`Bearer ${data.token}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credential) => {
  try {
    const { data } = await axios.post("/api/users/login", credential);
    tokenSet(`Bearer ${data.token}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/api/users/logout");
    tokenSet("");
  } catch (error) {
    console.log(error);
  }
});

export const current = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  if (!state.auth.token) return;
  tokenSet(`Bearer ${state.auth.token}`);
  try {
    const { data } = await axios.get("/api/users/current");
    return data;
  } catch (error) {
    console.log(error);
  }
});
