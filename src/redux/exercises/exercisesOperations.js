import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/services/instanceApi';
import { token } from 'redux/services/tokenApi';
import { tokenState } from 'redux/services/tokenState';
import {
  BACKEND_EXERCISES_ROUTE,
  BACKEND_EXERCISES_CATEGORY_ROUTE,
} from 'routes/constants';

export const fetchExercisesCategories = createAsyncThunk(
  'exercises/fetchExercisesCategories',
  async (params, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      const paramsURL = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
      const { data } = await instance.get(
        `${BACKEND_EXERCISES_CATEGORY_ROUTE}?${paramsURL}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExercisesItemsCategories = createAsyncThunk(
  'exercises/fetchExercisesItemsCategories',
  async ({ params, cancelToken }, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      const paramsURL = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
      const { data } = await instance.get(
        `${BACKEND_EXERCISES_ROUTE}?${paramsURL}`,
        {
          cancelToken: cancelToken,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
