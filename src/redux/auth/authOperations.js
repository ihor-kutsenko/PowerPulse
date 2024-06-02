import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  BACKEND_SIGN_UP_ROUTE,
  BACKEND_SIGN_IN_ROUTE,
  BACKEND_LOGOUT_ROUTE,
} from 'routes/constants';

axios.defaults.baseURL = 'https://backend-powerpulse.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(BACKEND_SIGN_UP_ROUTE, credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(BACKEND_SIGN_IN_ROUTE, credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post(BACKEND_LOGOUT_ROUTE);
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
