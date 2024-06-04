import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registrationUser, loginUser, logOutUser } from './authOperations';
import {
  handleFulfilledRegistration,
  handleFulfilledLogin,
  handleFulfilledLogOut,
  handlePending,
  handleRejected,
} from './authReducers';
import { operationsType } from './authOperationsType';

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationUser.fulfilled, handleFulfilledRegistration)
      .addCase(loginUser.fulfilled, handleFulfilledLogin)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
      .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
