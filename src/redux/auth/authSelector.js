// import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLogIn = state => state.auth.isLogIn;
