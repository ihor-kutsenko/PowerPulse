import exercises from '../../../data/exercises.json';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import styles from './ExerciseList.module.scss';

const ExercisesList = () => {
  return (
    <div className={styles.list}>
      <div>
        {exercises.map(exercise => (
          <ExercisesItem key={exercise._id.$oid} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;
