import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { operationsType } from './exercisesOperationsType';
import {
  fetchExercisesCategories,
  fetchExercisesItemsCategories,
} from './exercisesOperations';
import {
  handlePending,
  handleRejected,
  handleFulfilledCategory,
  handleFulfilledItemsCategory,
} from './exercisesReducers';

const initialState = {
  exercisesCategory: [],
  itemsCategory: [],
  totalRecords: '',
  page: 1,
  isLoading: false,
  error: null,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchExercisesCategories.fulfilled, handleFulfilledCategory)
      .addCase(
        fetchExercisesItemsCategories.fulfilled,
        handleFulfilledItemsCategory
      )
      .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
      .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected);
  },
});

export const exercisesReducer = exercisesSlice.reducer;
