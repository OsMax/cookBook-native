import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './authOperation';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLogIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
