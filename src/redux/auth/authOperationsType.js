import {
  registrationUser,
  loginUser,
  logOutUser,
  refreshUser,
} from './authOperations';

const operationsThunk = [registrationUser, loginUser, logOutUser, refreshUser];

export const operationsType = type =>
  operationsThunk.map(operation => operation[type]);
