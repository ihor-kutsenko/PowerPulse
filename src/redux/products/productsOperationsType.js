import {
  fetchProducts,
  fetchProductsCategories,
} from './productsOperations.js';

const operationsThunk = [fetchProducts, fetchProductsCategories];

export const operationsType = type =>
  operationsThunk.map(operation => operation[type]);
