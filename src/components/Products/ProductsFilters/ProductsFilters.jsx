import categories from '../../../data/productsCategories.json';
import styles from './ProductsFilters.module.scss';

const ProductsFilters = () => {
  return (
    <>
      <form>
        <div className={styles.filterSearchWrapper}>
          <input type="text" name="search" placeholder="Search" />
        </div>
        <div className={styles.filterSelectWrapper}>
          <select name="category">
            <option value="">Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select name="recommended">
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
