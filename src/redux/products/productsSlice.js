import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsCategories } from './productsOperations';
import { operationsType } from './productsOperationsType';
import {
  handleFulfilled,
  handleFulfilledCategory,
  handlePending,
  handleRejected,
} from './productsReducers';

const initialState = {
  items: [],
  category: [],
  filters: {
    page: 1,
    search: '',
    category: '',
    recommended: '',
  },
  getMore: false,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setItems: state => {
      state.items = [];
    },
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, handleFulfilled)
      .addCase(fetchProductsCategories.fulfilled, handleFulfilledCategory)
      .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
      .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected);
  },
});

export const productsReducer = productsSlice.reducer;
export const { setItems, setFilters } = productsSlice.actions;
