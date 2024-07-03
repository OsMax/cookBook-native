import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASEURL = "http://192.168.88.16:3000"; //home
// const BASEURL = "http://192.168.52.123:3000"; //work
const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;
const tokenSet = (token) => {
  axios.defaults.headers.common.authorization = token;
};

export const addRecipe = createAsyncThunk(
  "recipe/add",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const { img, recipeInfo } = data;
    recipeInfo.date = new Date();
    try {
      const formData = new FormData();
      if (img) {
        formData.append("image", {
          uri: img,
          name: "image.jpg",
          type: "image/jpeg",
        });
      }

      formData.append("recipeInfo", JSON.stringify(recipeInfo));

      const recipeFetch = await fetch(`${BASEURL}/api/recipes/`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editRecipe = createAsyncThunk(
  "recipe/edit",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const { img, id, recipeInfo } = data;
    try {
      const formData = new FormData();
      if (img) {
        formData.append("image", {
          uri: img,
          name: "image.jpg",
          type: "image/jpeg",
        });
      }
      // console.log(recipeInfo);

      formData.append("recipeInfo", JSON.stringify(recipeInfo));

      const recipeFetch = await fetch(`${BASEURL}/api/recipes/${id}`, {
        method: "PATCH",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      return await recipeFetch.json();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPublic = createAsyncThunk(
  "recipe/getPublic",
  async ({ page, count }) => {
    // const state = thunkAPI.getState();
    // console.log(page, count);
    try {
      const { data } = await axios.get(
        `/api/recipes/public?page=${page}&count=${count}`
      );
      return { data, page };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMy = createAsyncThunk(
  "recipe/getMy",
  async ({ page, count }, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.auth.token) return thunkAPI.rejectWithValue("Without token");
    tokenSet(`Bearer ${state.auth.token}`);

    try {
      const { data } = await axios.get(
        `/api/recipes/my?page=${page}&count=${count}`
      );
      // console.log(data);
      return { data, page };
    } catch (error) {
      console.log(error);
    }
  }
);
