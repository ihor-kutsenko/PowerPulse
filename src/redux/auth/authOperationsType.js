import { registrationUser, loginUser, logOutUser } from './authOperations';

const operationsThunk = [registrationUser, loginUser, logOutUser];

export const operationsType = type =>
  operationsThunk.map(operation => operation[type]);
