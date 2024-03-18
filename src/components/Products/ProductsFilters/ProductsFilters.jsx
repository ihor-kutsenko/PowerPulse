import Svg from 'components/Svg/Svg';
import categories from '../../../data/productsCategories.json';
import styles from './ProductsFilters.module.scss';
import { useFormik } from 'formik';

const ProductsFilters = ({
  setSelectedCategory,
  setSearchTerm,
  setRecommended,
}) => {
  const formik = useFormik({
    initialValues: {
      search: '',
      category: '',
      recommended: '',
    },
  });

  const handleSearchChange = event => {
    formik.setFieldValue('search', event.target.value);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleRecommendedChange = event => {
    setRecommended(event.target.value);
  };

  const handleSearchClear = () => {
    formik.setFieldValue('search', '');
    setSearchTerm('');
  };

  const handleSearchClick = () => {
    setSearchTerm(formik.values.search);
    setSelectedCategory(formik.values.category);
    setRecommended(formik.values.recommended);
  };

  return (
    <>
      <form className={styles.filterForm}>
        <div className={styles.filterForm_SearchWrapper}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={styles.filterForm_SearchField}
            value={formik.values.search}
            onChange={handleSearchChange}
          />
          <button
            className={styles.filterForm_btnSearch}
            type="button"
            onClick={handleSearchClick}
          >
            <Svg
              iconId={'icon-Search'}
              className={styles.filterForm_iconSearch}
            />
          </button>

          {formik.values.search !== '' && (
            <button
              className={styles.filterForm_btnCancel}
              onClick={handleSearchClear}
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
            onChange={handleCategoryChange}
          >
            <option value="">Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            name="recommended"
            className={styles.filterForm_selectRecommended}
            onChange={handleRecommendedChange}
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
