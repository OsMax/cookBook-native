import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASEURL = "http://192.168.88.16:3000"; //home
const BASEURL = "http://192.168.226.123:3000"; //work
// const BASEURL = "https://cookbook-t2ch.onrender.com";

axios.defaults.baseURL = BASEURL;
const tokenSet = (token) => {
  axios.defaults.headers.common.authorization = token;
};

export const addComment = createAsyncThunk(
  "comment/add",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const { id, text } = data;
    if (!state.auth.token) return thunkAPI.rejectWithValue("Without token");
    tokenSet(`Bearer ${state.auth.token}`);

    const comment = { text };
    comment.date = new Date();

    try {
      const result = await axios.post(`/api/comments/${id}`, comment);
      //   return result;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);

      //   return result;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);
