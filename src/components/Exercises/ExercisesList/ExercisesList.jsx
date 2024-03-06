import exercises from '../../../data/exercises.json';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import styles from './ExerciseList.module.scss';

const ExercisesList = ({ activeFilter }) => {
  const filteredExercises = exercises.filter(exercise => {
    const matchCondition =
      exercise.bodyPart === activeFilter ||
      exercise.equipment === activeFilter ||
      exercise.target === activeFilter ||
      exercise.name === activeFilter;
    return matchCondition;
  });

  return (
    <div>
      <div className={styles.exercise_container}>
        {filteredExercises.map(exercise => (
          <ExercisesItem key={exercise._id.$oid} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;
