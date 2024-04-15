import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASEURL = "http://192.168.241.123:3000";
const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;

const tokenSet = (token) => {
  axios.defaults.headers.common.authorization = token;
};

export const register = createAsyncThunk("auth/register", async (data) => {
  const { avatar, info } = data;
  try {
    const { data } = await axios.post("/api/users/register", info);
    // console.log("11111");
    // console.log(data);
    tokenSet(`Bearer ${data.token}`);

    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", {
        uri: avatar,
        name: "image.jpg",
        type: "image/jpeg",
      });

      const avaFetch = await fetch(`${BASEURL}/api/users/avatar`, {
        method: "PATCH",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${data.token}`,
        },
      });

      // const ava = await avaFetch.json();
      const { avatarURL } = await avaFetch.json();
      data.user.avatarURL = avatarURL;
      // console.log(data);
      // const ava = await fetch("http://192.168.241.123:3000/api/users/test", {
      //   method: "PATCH",
      //   headers: { Authorization: `Bearer ${data.token}` },
      //   // body: formData,
      // });
      // console.log(ava);
    }
    // console.log(r);
    return data;
  } catch (error) {
    console.log(error);
  }
});

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
  // if (!state.auth.token) return;
  if (!state.auth.token) return thunkAPI.rejectWithValue("Without token");
  tokenSet(`Bearer ${state.auth.token}`);
  try {
    const { data } = await axios.get("/api/users/current");
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Without token");
  }
});
