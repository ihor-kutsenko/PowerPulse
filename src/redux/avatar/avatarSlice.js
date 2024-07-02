import { createSlice } from '@reduxjs/toolkit';
import { uploadAvatar } from './avatarOperations';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './avatarReducers';

const initialState = {
  avatar: {},
  isLoading: false,
  error: null,
};

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(uploadAvatar.pending, handlePending)
      .addCase(uploadAvatar.fulfilled, handleFulfilled)
      .addCase(uploadAvatar.rejected, handleRejected);
  },
});

export const avatarReducer = avatarSlice.reducer;
