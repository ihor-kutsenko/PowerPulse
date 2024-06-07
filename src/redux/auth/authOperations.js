import axios from 'axios';
import { toast } from 'react-toastify';
import notifyOptions from 'utils/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  BACKEND_SIGN_UP_ROUTE,
  BACKEND_SIGN_IN_ROUTE,
  BACKEND_SIGN_OUT_ROUTE,
  BACKEND_REFRESH_ROUTE,
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

      console.log(data);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(data.token);

      toast.success('Your registration is successful!', notifyOptions);
      console.log(data);

      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
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

      toast.success('Your login is successful!', notifyOptions);

      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('You must be logged in');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get(BACKEND_REFRESH_ROUTE);
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
      const { data } = await axios.post(BACKEND_SIGN_OUT_ROUTE);
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
