import ExercisesItem from '../ExercisesItem/ExercisesItem';
import styles from './ExercisesList.module.scss';

const BodyPartList = ({ exercises, handleFilterClick }) => {
  const filteredExercises = exercises.filter(
    exercise => exercise.filter === 'Body parts'
  );
  return (
    <ul className={styles.exercises_list}>
      {filteredExercises.map(item => (
        <ExercisesItem
          key={item._id.$oid}
          exercisesItem={item}
          handleFilterClick={handleFilterClick}
        />
      ))}
    </ul>
  );
};

export default BodyPartList;
