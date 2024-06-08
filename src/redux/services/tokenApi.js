import { instance } from './instanceApi';

export const token = {
  set: token => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const tokenState = thunkAPI => thunkAPI.getState().auth.token;
