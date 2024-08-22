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
  async ({ type, page, limit }, thunkAPI) => {
    // const params = {
    //     type: 'string', ('Body parts', 'Muscles', 'Equipment')
    //     page: 'string' || Number,
    //     limit: 'string' || Number,
    // }
    try {
      token.set(tokenState(thunkAPI));
      const paramsURL = `type=${type}&page=${page}&limit=${limit}`;

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
  async ({ id, page, limit }, thunkAPI) => {
    //   const params = {
    //     id: 'string',
    //     page: 'string' || Number,
    //     limit: 'string' || Number,
    // }
    try {
      token.set(tokenState(thunkAPI));

      const paramsURL = `id=${id}&page=${page}&limit=${limit}`;

      const { data } = await instance.get(
        `${BACKEND_EXERCISES_ROUTE}?${paramsURL}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
