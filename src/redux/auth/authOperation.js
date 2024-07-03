import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASEURL = "http://192.168.226.123:3000";
const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;

const tokenSet = (token) => {
  axios.defaults.headers.common.authorization = token;
};

export const register = createAsyncThunk("auth/register", async (data) => {
  const { avatar, info } = data;
  try {
    const formData = new FormData();
    if (avatar) {
      formData.append("avatar", {
        uri: avatar,
        name: "image.jpg",
        type: "image/jpeg",
      });
    }
    formData.append("info", JSON.stringify(info));

    const userFetch = await fetch(`${BASEURL}/api/users/register`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const user = await userFetch.json();
    return user;
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

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(data);
    // if (!state.auth.token) return;
    if (!state.auth.token) return thunkAPI.rejectWithValue("Without token");

    const { avatar, info } = data;
    try {
      const formData = new FormData();
      if (avatar) {
        formData.append("avatar", {
          uri: avatar,
          name: "image.jpg",
          type: "image/jpeg",
        });
      }
      formData.append("info", JSON.stringify(info));

      const editFetch = await fetch(`${BASEURL}/api/users/edit`, {
        method: "PATCH",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      const user = await editFetch.json();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);
