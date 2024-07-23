import { createSlice } from "@reduxjs/toolkit";
import { addRecipe, getPublic, getMy, editRecipe } from "./recipeOperation";

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
      .addCase(editRecipe.pending, (state) => {
        state.loader = true;
      })
      .addCase(editRecipe.fulfilled, (state, { payload }) => {
        state.recipes = state.recipes.map((recipe) =>
          recipe._id === payload._id ? { ...recipe, ...payload } : recipe
        );
        state.loader = false;
      })
      .addCase(editRecipe.rejected, (state) => {
        state.loader = false;
      })
      .addCase(getPublic.pending, (state) => {
        state.loader = true;
      })
      .addCase(getPublic.fulfilled, (state, { payload }) => {
        const { data, page } = payload;

        if (page === 1) state.recipes = [...data];
        else state.recipes = [...state.recipes, ...data];

        state.loader = false;
      })
      .addCase(getPublic.rejected, (state) => {
        state.loader = false;
      })
      .addCase(getMy.pending, (state) => {
        state.loader = true;
      })
      .addCase(getMy.fulfilled, (state, { payload }) => {
        const { data, page } = payload;

        if (page === 1) state.recipes = [...data];
        else state.recipes = [...state.recipes, ...data];

        state.loader = false;
      })
      .addCase(getMy.rejected, (state) => {
        state.loader = false;
      });
  },
});

export const recipeReducer = recipeSlise.reducer;
