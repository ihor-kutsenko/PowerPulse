import ProductsItem from '../ProductsItem/ProductsItem';
import bg from '../../../images/exercise-list-bg.jpg';
import products from '../../../data/products.json';

import styles from '../../Exercises/ExercisesList//ExerciseList.module.scss';

const ProductsList = () => {
  return (
    <>
      <div className={styles.list}>
        <div className={styles.exercise_container}>
          {products.map(product => (
            <ProductsItem key={product._id.$oid} product={product} />
          ))}
        </div>
        <img src={bg} alt="imag" className={styles.img_bg} />
      </div>
    </>
  );
};

export default ProductsList;
