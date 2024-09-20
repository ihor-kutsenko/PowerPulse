import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProductsItem from '../ProductsItem/ProductsItem';
import ProductsNotFound from '../ProductsNotFound/ProductsNotFound';
import bg from '../../../images/products-list-bg.jpg';

import useProduct from 'hooks/useProduct';
import { setFilters, setItems } from 'redux/products/productsSlice';
import { fetchProducts } from 'redux/products/productsOperations';

import styles from '../../Exercises/ExercisesList//ExerciseList.module.scss';

const ProductsList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const observer = useRef();

  const { products, filters, productsGetMore } = useProduct();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const isEmptyParams =
    Object.keys(params).length > 0 &&
    (params.search !== filters.search ||
      params.category !== filters.category ||
      params.recommended !== filters.recommended);

  const lastElementRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && productsGetMore) {
          let currentPage = filters.page + 1;
          dispatch(setFilters({ page: currentPage }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [productsGetMore, dispatch, filters.page]
  );

  useEffect(() => {
    const filterParams = filters;
    if (isEmptyParams) {
      dispatch(setFilters({ ...params }));
    }

    dispatch(fetchProducts({ filterParams }));
  }, [dispatch, filters, params, isEmptyParams]);

  useEffect(() => {
    return () => {
      dispatch(setItems());
      dispatch(setFilters({ page: 1 }));
    };
  }, [dispatch]);

  return (
    <>
      <div className={styles.list}>
        <div className={styles.exercise_container}>
          {products.length === 0 && <ProductsNotFound />}
          {products.map((product, index) => (
            <ProductsItem
              key={`${product._id}-${index}`}
              product={product}
              ref={lastElementRef}
            />
          ))}
        </div>
        <img src={bg} alt="imag" className={styles.img_bgProducts} />
      </div>
    </>
  );
};

export default ProductsList;
