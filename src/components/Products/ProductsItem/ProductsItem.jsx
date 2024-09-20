import { forwardRef, useState } from 'react';

import Svg from 'components/Svg/Svg';
import BasicModalWindow from 'components/ModalWindows/BasicModalWindow/BasicModalWindow';
import AddProduct from 'components/ModalWindows/AddProduct/AddProduct';
import AddProductSuccess from 'components/ModalWindows/AddProductSuccess/AddProductSuccess';

import useAuth from 'hooks/useAuth';

import styles from '../../Exercises/ExercisesItem/ExercisesItem.module.scss';

const ProductsItem = forwardRef(({ product }, ref) => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalProduct, setModalProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const {
    user: {
      profileSettings: { blood },
    },
  } = useAuth();

  const handleModalProduct = () => setModalProduct(!modalProduct);
  const handleModalSuccess = () => setModalSuccess(!modalSuccess);

  const handleSelectedProduct = data => {
    setSelectedProduct(data);
  };

  const isRecommended = product.groupBloodNotAllowed[blood];

  return (
    <div className={styles.exercisesItem_wrapper} ref={ref}>
      <div className={styles.exercisesItem_topWrapper}>
        <p className={styles.exercisesItem_text}>diet</p>
        {isRecommended ? (
          <div className={styles.productRecommended}>
            <p className={styles.productRecommendedTrue}></p>
            <p>Recommended</p>
          </div>
        ) : (
          <div className={styles.productRecommended}>
            <p className={styles.productRecommendedFalse}></p>
            <p>Not recommended</p>
          </div>
        )}
        <button
          className={styles.exercisesItem_btnStart}
          onClick={() => {
            handleModalProduct();
          }}
        >
          Add
          <Svg
            iconId={'icon-arrow-right'}
            className={styles.exercisesItem_iconArrowRight}
          />
        </button>
      </div>

      <div className={styles.exercisesItem_nameWrapper}>
        <Svg iconId={'icon-run'} className={styles.exercisesItem_iconRun} />
        <h3 className={styles.exercisesItem_title}>{product.title}</h3>
      </div>
      <ul className={styles.exercisesItem_bottomList}>
        <li className={styles.exercisesItem_item}>
          Calories:
          <span className={styles.exercisesItem_itemText}>
            {product.calories}
          </span>
        </li>
        <li className={styles.exercisesItem_item}>
          Category:
          <span className={styles.exercisesItem_itemText}>
            {product.category}
          </span>
        </li>
        <li className={styles.exercisesItem_item}>
          Weight:
          <span className={styles.exercisesItem_itemText}>
            {product.weight}
          </span>
        </li>
      </ul>

      {modalProduct && (
        <BasicModalWindow handleModalToggle={handleModalProduct}>
          <AddProduct
            product={product}
            handleModalProduct={handleModalProduct}
            handleModalSuccess={handleModalSuccess}
            handleSelectedProduct={handleSelectedProduct}
          />
        </BasicModalWindow>
      )}
      {modalSuccess && (
        <BasicModalWindow handleModalToggle={handleModalSuccess}>
          <AddProductSuccess
            handleModalSuccess={handleModalSuccess}
            selectedProduct={selectedProduct}
          />
        </BasicModalWindow>
      )}
    </div>
  );
});

export default ProductsItem;
