import { useSelector } from 'react-redux';
import {
  selectProducts,
  selectProductsCategory,
  selectProductsError,
  selectProductsFilters,
  selectProductsGetMore,
  selectProductsIsLoading,
} from 'redux/products/productsSelectors';

const useProduct = () => {
  const products = useSelector(selectProducts);
  const category = useSelector(selectProductsCategory);
  const filters = useSelector(selectProductsFilters);
  const productsGetMore = useSelector(selectProductsGetMore);
  const productsIsLoading = useSelector(selectProductsIsLoading);
  const productsError = useSelector(selectProductsError);

  return {
    products,
    category,
    filters,
    productsGetMore,
    productsIsLoading,
    productsError,
  };
};

export default useProduct;
