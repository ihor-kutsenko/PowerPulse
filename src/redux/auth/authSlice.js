import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registrationUser,
  loginUser,
  logOutUser,
  refreshUser,
  updateProfileSettings,
} from './authOperations';
import { uploadAvatar } from 'redux/avatar/avatarOperations';
import {
  handleFulfilledRegistration,
  handleFulfilledLogin,
  handleFulfilledLogOut,
  handlePending,
  handleRejected,
  handleFulfilledRefresh,
  handleFulfilledUpdateProfileSettings,
} from './authReducers';
import { operationsType } from './authOperationsType';

const contactsInitialState = {
  user: {
    email: '',
    name: '',
    registrationDate: '',
    avatarURL: '',
    profileSettings: {
      height: '',
      currentWeight: '',
      desiredWeight: '',
      birthday: null,
      blood: null,
      levelActivity: null,
      sex: null,
      bmr: 0,
    },
  },
  token: '',
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: contactsInitialState,
  reducers: {
    setAvatarURL: (state, action) => {
      state.user.avatarURL = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationUser.fulfilled, handleFulfilledRegistration)
      .addCase(loginUser.fulfilled, handleFulfilledLogin)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.avatarURL = action.payload;
      })
      .addCase(
        updateProfileSettings.fulfilled,
        handleFulfilledUpdateProfileSettings
      )
      .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
      .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected);
  },
});

export const { setAvatarURL } = authSlice.actions;
export const authReducer = authSlice.reducer;
