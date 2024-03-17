import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ProductsItem from '../ProductsItem/ProductsItem';
import bg from '../../../images/products-list-bg.jpg';
import products from '../../../data/products.json';

import styles from '../../Exercises/ExercisesList//ExerciseList.module.scss';

const ProductsList = ({ selectedCategory }) => {
  const location = useLocation();
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  useEffect(() => {
    if (selectedCategory && location.pathname !== '/products') {
      window.location.href = '/products';
    }
  }, [selectedCategory, location]);
  return (
    <>
      <div className={styles.list}>
        <div className={styles.exercise_container}>
          {filteredProducts.map(product => (
            <ProductsItem key={product._id.$oid} product={product} />
          ))}
        </div>
        <img src={bg} alt="imag" className={styles.img_bgProducts} />
      </div>
    </>
  );
};

export default ProductsList;
