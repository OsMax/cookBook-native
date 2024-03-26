import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '480px',
  position: 'right-bottom',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  clickToClose: true,
  timeout: 3000,
  background: '#4f2ee8',
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const tokenSet = token => {
  axios.defaults.headers.common.authorization = token;
};

export const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    tokenSet(`Bearer ${data.token}`);
    Notiflix.Notify.success('You are registered...');
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Somethint is wrong...');
  }
});

export const login = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/users/login', credential);
    tokenSet(`Bearer ${data.token}`);
    Notiflix.Notify.success('Access allowed...');
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Wrong email or password...');
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    tokenSet('');
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  if (!state.auth.token) return;

  tokenSet(`Bearer ${state.auth.token}`);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
});
