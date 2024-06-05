import { createSlice } from "@reduxjs/toolkit";
import { getComments, addComment, editComment } from "./comOperation";

const initialState = {
  comments: [],
};

const comSlice = createSlice({
  name: "recipe",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.loader = true;
      })
      .addCase(addRecipe.fulfilled, (state, { payload }) => {
        state.loader = false;
      })
      .addCase(addRecipe.rejected, (state) => {
        state.loader = false;
      });
  },
});
