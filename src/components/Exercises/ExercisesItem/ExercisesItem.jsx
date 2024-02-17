import styles from './ExercisesItem.module.scss';

const ExercisesItem = ({ exercisesItem }) => {
  const { name, filter, imgURL } = exercisesItem;
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

export default ExercisesItem;
