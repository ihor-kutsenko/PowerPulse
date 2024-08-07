import { toast } from 'react-toastify';
import notifyOptions from 'utils/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/services/instanceApi';
import { token } from 'redux/services/tokenApi';
import { tokenState } from 'redux/services/tokenState';
import {
  BACKEND_SIGN_UP_ROUTE,
  BACKEND_SIGN_IN_ROUTE,
  BACKEND_SIGN_OUT_ROUTE,
  BACKEND_REFRESH_ROUTE,
} from 'routes/constants';

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(BACKEND_SIGN_UP_ROUTE, credentials);

      token.set(data.token);

      toast.success('Your registration is successful!', notifyOptions);

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
      const { data } = await instance.post(BACKEND_SIGN_IN_ROUTE, credentials);

      token.set(data.token);

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
    try {
      token.set(tokenState(thunkAPI));
      const { data } = await instance.get(BACKEND_REFRESH_ROUTE);
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
      const { data } = await instance.post(BACKEND_SIGN_OUT_ROUTE);
      token.clear();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
