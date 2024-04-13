import AddItemDiaryBtn from 'components/Buttons/AddItemDiaryBtn/AddItemDiaryBtn';
import EmptyList from '../EmptyList/EmptyList';
import ExercisesTable from '../ExercisesTable/ExercisesTable';

import { EXERCISES_ROUTE } from 'routes/constants';

import exercises from '../../../data/dayexercises.json';
import styles from '../DayProducts/DayProducts.module.scss';

const DayExercises = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_scroll}>
        <div className={styles.title_wrapper}>
          <h3 className={styles.title}>Exercises</h3>
          <AddItemDiaryBtn
            titleLink="Add exercise"
            titleRoute={EXERCISES_ROUTE}
          />
        </div>
        {exercises.length === 0 ? (
          <EmptyList listName={'exercises'} />
        ) : (
          <ExercisesTable exercises={exercises} />
        )}
      </div>
    </div>
  );
};

export default DayExercises;
