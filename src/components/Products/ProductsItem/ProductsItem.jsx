import Svg from 'components/Svg/Svg';
import styles from '../../Exercises/ExercisesItem/ExercisesItem.module.scss';

const ProductsItem = ({ product }) => {
  const userBloodGroup = 1;
  const isRecommended = product.groupBloodNotAllowed[userBloodGroup.toString()];

  return (
    <div className={styles.exercisesItem_wrapper}>
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
        <button className={styles.exercisesItem_btnStart}>
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
    </div>
  );
};

export default ProductsItem;
