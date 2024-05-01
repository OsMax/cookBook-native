import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASEURL = "http://192.168.88.16:3000"; //home

// const BASEURL = "http://192.168.155.123:3000"; //work
// const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;

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

export const getPublic = createAsyncThunk(
  "recipe/getPublic",
  async ({ page, count }) => {
    // const state = thunkAPI.getState();
    console.log(page, count);
    try {
      const { data } = await axios.get(
        `/api/recipes/public?page=${page}&count=${count}`
      );
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
