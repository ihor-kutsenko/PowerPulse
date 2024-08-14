import {
  fetchExercisesCategories,
  fetchExercisesItemsCategories,
} from './exercisesOperations';

const operationsThunk = [
  fetchExercisesCategories,
  fetchExercisesItemsCategories,
];
export const operationsType = type =>
  operationsThunk.map(operation => operation[type]);
