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
        state.recipes.loader = true;
      })
      .addCase(addRecipe.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.recipes.loader = false;
      })
      .addCase(addRecipe.rejected, (state) => {
        state.recipes.loader = false;
      });
  },
});

export const recipeReducer = recipeSlise.reducer;
