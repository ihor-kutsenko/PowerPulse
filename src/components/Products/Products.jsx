import Title from 'components/Title/Title';
import ProductsFilters from './ProductsFilters/ProductsFilters';
import ProductsList from './ProductsList/ProductsList';

import styles from './Products.module.scss';

const Products = () => {
  return (
    <>
      <div className={styles.wrapper_products}>
        <Title text="Products" className={styles.title} />
        <ProductsFilters />
      </div>
      <ProductsList />
    </>
  );
};

export default Products;
