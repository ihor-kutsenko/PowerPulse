import { useState } from 'react';

import Title from 'components/Title/Title';
import ProductsFilters from './ProductsFilters/ProductsFilters';

import ProductsList from './ProductsList/ProductsList';

import styles from './Products.module.scss';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className={styles.wrapper_products}>
        <Title text="Products" className={styles.title} />
        <ProductsFilters
          setSelectedCategory={setSelectedCategory}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <ProductsList
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default Products;
