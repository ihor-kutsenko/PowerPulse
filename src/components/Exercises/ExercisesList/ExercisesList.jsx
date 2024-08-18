import ExercisesItem from '../ExercisesItem/ExercisesItem';

import useExercise from 'hooks/useExercise';

import bg from '../../../images/exercise-list-bg.jpg';
import styles from './ExerciseList.module.scss';

const ExercisesList = ({ activeFilter, filter }) => {
  const { exercisesItemsCategory } = useExercise();

  const filteredExercises = exercisesItemsCategory.filter(exercise => {
    const matchCondition =
      exercise.bodyPart === activeFilter ||
      exercise.equipment === activeFilter ||
      exercise.target === activeFilter ||
      exercise.name === activeFilter;
    return matchCondition;
  });

  return (
    <>
      <div className={styles.list}>
        <div className={styles.exercise_container}>
          {filteredExercises.map(exercise => (
            <ExercisesItem
              key={exercise._id}
              exercise={exercise}
              filter={filter}
            />
          ))}
        </div>
        <img src={bg} alt="imag" className={styles.img_bg} />
      </div>
    </>
  );
};

export default ExercisesList;
