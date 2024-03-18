import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ProductsItem from '../ProductsItem/ProductsItem';
import bg from '../../../images/products-list-bg.jpg';
import products from '../../../data/products.json';

import styles from '../../Exercises/ExercisesList//ExerciseList.module.scss';

const ProductsList = ({ selectedCategory, searchTerm, recommended }) => {
  const location = useLocation();

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const searchMatch =
      !searchTerm ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    let recommendedMatch = true;
    if (recommended !== '') {
      const isRecommended = recommended === 'true';
      recommendedMatch = isRecommended
        ? product.groupBloodNotAllowed['1']
        : !product.groupBloodNotAllowed['1'];
    }

    return categoryMatch && searchMatch && recommendedMatch;
  });

  useEffect(() => {
    if (
      (selectedCategory || searchTerm || recommended) &&
      location.pathname !== '/products'
    ) {
      window.location.href = '/products';
    }
  }, [selectedCategory, searchTerm, recommended, location]);

  return (
    <>
      <div className={styles.list}>
        <div className={styles.exercise_container}>
          {filteredProducts.map(product => (
            <ProductsItem
              key={product._id.$oid}
              product={product}
              recommended={recommended}
            />
          ))}
        </div>
        <img src={bg} alt="imag" className={styles.img_bgProducts} />
      </div>
    </>
  );
};

export default ProductsList;
