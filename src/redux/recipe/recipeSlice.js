import { createSlice } from "@reduxjs/toolkit";
import { addRecipe, getPublic } from "./recipeOperation";

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
      .addCase(getPublic.rejected, (state) => {
        // console.log(state);
        state.loader = true;
      })
      .addCase(getPublic.fulfilled, (state, { payload }) => {
        const { data, page } = payload;

        if (page === 1) state.recipes = [...data];
        else state.recipes = [...state.recipes, ...data];

        state.loader = false;
      });
  },
});

export const recipeReducer = recipeSlise.reducer;
