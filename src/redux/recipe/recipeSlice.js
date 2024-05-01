import { createSlice } from "@reduxjs/toolkit";
import { addRecipe } from "./recipeOperation";

const initialState = {
  recipes: [],
  loader: false,
};

const recipeSlise = createSlice({
  name: "recipe",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addRecipe.pending, (state) => {
        state.loader = true;
      })
      .addCase(addRecipe.fulfilled, (state, { payload }) => {
        state.loader = false;
      })
      .addCase(addRecipe.rejected, (state) => {
        state.loader = false;
      })
      });
  },
});

export const recipeReducer = recipeSlise.reducer;
