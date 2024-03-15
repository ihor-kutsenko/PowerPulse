import categories from '../../../data/productsCategories.json';
import styles from './ProductsFilters.module.scss';

const ProductsFilters = () => {
  return (
    <>
      <form className={styles.filterForm}>
        <div className={styles.filterForm_SearchWrapper}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={styles.filterForm_SearchField}
          />
        </div>
        <div className={styles.filterForm_SelectWrapper}>
          <select name="category" className={styles.filterForm_selectCategory}>
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
