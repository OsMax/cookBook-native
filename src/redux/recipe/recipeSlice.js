import { createSlice } from "@reduxjs/toolkit";
import { addRecipe, getPublic, getMy } from "./recipeOperation";

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
        state.loader = true;
      })
      .addCase(getPublic.fulfilled, (state, { payload }) => {
        const { data, page } = payload;

        if (page === 1) state.recipes = [...data];
        else state.recipes = [...state.recipes, ...data];

        state.loader = false;
      })
      .addCase(getMy.rejected, (state) => {
        state.loader = true;
      })
      .addCase(getMy.fulfilled, (state, { payload }) => {
        const { data, page } = payload;

        if (page === 1) state.recipes = [...data];
        else state.recipes = [...state.recipes, ...data];

        state.loader = false;
      });
  },
});

export const recipeReducer = recipeSlise.reducer;
