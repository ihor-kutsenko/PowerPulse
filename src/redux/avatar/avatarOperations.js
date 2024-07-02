import { toast } from 'react-toastify';
import notifyOptions from 'utils/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/services/instanceApi';
import { token, tokenState } from 'redux/services/tokenApi';
import { BACKEND_AVATAR_ROUTE } from 'routes/constants';

const configAxios = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export const uploadAvatar = createAsyncThunk(
  'avatar/uploadAvatar',
  async (file, thunkAPI) => {
    try {
      token.set(tokenState(thunkAPI));
      let formData = new FormData();
      formData.append('avatar', file);

      const { data } = await instance.patch(
        BACKEND_AVATAR_ROUTE,
        formData,
        configAxios
      );
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!', notifyOptions);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
