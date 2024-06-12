import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASEURL = "http://192.168.88.16:3000"; //home
const BASEURL = "http://192.168.241.123:3000"; //work
// const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;
const tokenSet = (token) => {
  axios.defaults.headers.common.authorization = token;
};

// export const getComments = createAsyncThunk("comment/get", async (throw))

export const addComment = createAsyncThunk(
  "comment/add",
  async (data, thunkAPI) => {
    // console.log(data);
    // return data;
    const state = thunkAPI.getState();
    const { recipeId, commentText } = data;
    // if (!state.auth.token) return thunkAPI.rejectWithValue("Without token");
    tokenSet(`Bearer ${state.auth.token}`);
    // console.log(comment);

    // const comment = { text };
    // comment.date = new Date();
    const myComment = { commentText, date: new Date() };

    try {
      const { data } = await axios.post(`/api/comments/${recipeId}`, myComment);
      return data;
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
  }
);

export const editComment = createAsyncThunk(
  "comment/edit",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const { id, text } = data;
    if (!state.auth.token) return thunkAPI.rejectWithValue("Without token");
    tokenSet(`Bearer ${state.auth.token}`);
    const comment = { text };

    try {
      const result = await axios.patch(`/api/comments/${id}`, comment);
      //   return result;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);
