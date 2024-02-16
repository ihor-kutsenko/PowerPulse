import ExercisesNavigation from './ExercisesNavigation/ExercisesNavigation';
import Title from 'components/Title/Title';
import styles from './Exercises.module.scss';

const Exercises = () => {
  return (
    <div className={styles.wrapper}>
      <Title text="Exercises" className={styles.title} />
      <ExercisesNavigation />
    </div>
  );
};

export default Exercises;
