import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASEURL = "http://192.168.241.123:3000";
const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;

export const addRecipe = createAsyncThunk("recipe/add", async (credential) => {
  console.log("try add recipe");
  try {
    const { data } = await axios.post("/api/recipes", credential);
    // tokenSet(`Bearer ${data.token}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});
