import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/services/instanceApi';
import { token } from 'redux/services/tokenApi';
import { tokenState } from 'redux/services/tokenState';
import {
  BACKEND_PRODUCTS_CATEGORY_ROUTE,
  BACKEND_PRODUCTS_ROUTE,
} from 'routes/constants';

export const fetchProductsCategories = createAsyncThunk(
  'products/fetchProductsCategories',
  async (_, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      const { data } = await instance.get(BACKEND_PRODUCTS_CATEGORY_ROUTE);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ numberPage, filterParams }, thunkAPI) => {
    try {
      const params = {
        ...numberPage,
        ...filterParams,
      };
      token.set(tokenState(thunkAPI));
      const paramsURL = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
      const { data } = await instance.get(
        `${BACKEND_PRODUCTS_ROUTE}?${paramsURL}`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
