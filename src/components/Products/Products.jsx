import { useState } from 'react';

import Title from 'components/Title/Title';
import ProductsFilters from './ProductsFilters/ProductsFilters';

import ProductsList from './ProductsList/ProductsList';

import styles from './Products.module.scss';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [recommended, setRecommended] = useState('');

  return (
    <>
      <div className={styles.wrapper_products}>
        <Title text="Products" className={styles.title} />
        <ProductsFilters
          setSelectedCategory={setSelectedCategory}
          setSearchTerm={setSearchTerm}
          setRecommended={setRecommended}
        />
      </div>
      <ProductsList
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        recommended={recommended}
      />
    </>
  );
};

export default Products;
