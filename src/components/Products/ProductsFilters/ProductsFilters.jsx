import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Svg from 'components/Svg/Svg';

import useProduct from 'hooks/useProduct';
import { fetchProductsCategories } from 'redux/products/productsOperations';
import { setFilters, setItems } from 'redux/products/productsSlice';

import styles from './ProductsFilters.module.scss';

const ProductsFilters = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, filters } = useProduct();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const isEmptyFilters =
    filters.search !== '' ||
    filters.category !== '' ||
    filters.recommended !== '';

  const isEmptyParams = Object.keys(params).length === 0;

  const formik = useFormik({
    initialValues: {
      search: params.search || filters.search,
      category: params.category || filters.category,
      recommended: params.recommended || filters.recommended,
    },
    onSubmit: values => handleSubmit(values),
  });

  useEffect(() => {
    if (isEmptyParams && isEmptyFilters) {
      setSearchParams({
        search: filters.search,
        category: filters.category,
        recommended: filters.recommended,
      });
    }
    dispatch(fetchProductsCategories());
  }, [
    dispatch,
    isEmptyFilters,
    isEmptyParams,
    filters.search,
    filters.category,
    filters.recommended,
    setSearchParams,
  ]);

  const handleSubmit = paramsSearch => {
    setSearchParams(paramsSearch);
    dispatch(setItems());
    dispatch(setFilters({ page: 1, ...paramsSearch }));
  };

  const handleChange = e => {
    formik.handleChange(e);
    const { initialValues, values } = formik;
    if (e.target.value !== initialValues[e.target.value]) {
      const paramsSearch = { ...values, [e.target.name]: e.target.value };
      handleSubmit(paramsSearch);
    }
  };

  return (
    <>
      <form className={styles.filterForm} onSubmit={formik.handleSubmit}>
        <div className={styles.filterForm_SearchWrapper}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={styles.filterForm_SearchField}
            value={formik.values.search}
            onChange={formik.handleChange}
          />
          <button className={styles.filterForm_btnSearch} type="submit">
            <Svg
              iconId={'icon-Search'}
              className={styles.filterForm_iconSearch}
            />
          </button>

          {formik.values.search !== '' && (
            <button
              className={styles.filterForm_btnCancel}
              type="button"
              onClick={() => {
                formik.setFieldValue('search', '');
                formik.handleSubmit();
              }}
            >
              <Svg
                iconId={'icon-close'}
                className={styles.filterForm_iconCancel}
              />
            </button>
          )}
        </div>
        <div className={styles.filterForm_SelectWrapper}>
          <select
            name="category"
            className={styles.filterForm_selectCategory}
            onChange={handleChange}
          >
            <option value="">Categories</option>
            {category.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            name="recommended"
            className={styles.filterForm_selectRecommended}
            onChange={handleChange}
          >
            <option value="">All</option>
            <option value={true}>Recommended</option>
            <option value={false}>Not recommended</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ProductsFilters;
