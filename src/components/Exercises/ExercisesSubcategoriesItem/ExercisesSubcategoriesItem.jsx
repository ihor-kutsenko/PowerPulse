import styles from './ExercisesSubcategoriesItem.module.scss';

const ExercisesSubcategoriesItem = ({ ExercisesSubcategoriesItem }) => {
  const { name, filter, imgURL } = ExercisesSubcategoriesItem;
  return (
    <li className={styles.exercises_item}>
      <img src={imgURL} alt={name} className={styles.exercises_img} />
      <div className={styles.container}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{filter}</p>
      </div>
    </li>
  );
};

export default ExercisesSubcategoriesItem;
