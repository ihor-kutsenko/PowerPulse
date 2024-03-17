import { useState } from 'react';

import Title from 'components/Title/Title';
import ProductsFilters from './ProductsFilters/ProductsFilters';

import ProductsList from './ProductsList/ProductsList';

import styles from './Products.module.scss';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <div className={styles.wrapper_products}>
        <Title text="Products" className={styles.title} />
        <ProductsFilters setSelectedCategory={setSelectedCategory} />
      </div>
      <ProductsList selectedCategory={selectedCategory} />
    </>
  );
};

export default Products;
