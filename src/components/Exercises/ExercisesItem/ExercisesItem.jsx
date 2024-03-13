import { useState } from 'react';

import BasicModalWindow from 'components/ModalWindows/BasicModalWindow/BasicModalWindow';
import AddExercises from 'components/ModalWindows/AddExercises/AddExercises';
import AddExercisesSuccess from 'components/ModalWindows/AddExercisesSuccess/AddExercisesSuccess';
import Svg from 'components/Svg/Svg';

import styles from './ExercisesItem.module.scss';

const ExercisesItem = ({ exercise }) => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalExercise, setModalExercise] = useState(false);

  const handleModalExercise = () => setModalExercise(!modalExercise);
  const handleModalSuccess = () => setModalSuccess(!modalSuccess);

  return (
    <div className={styles.exercisesItem_wrapper}>
      <div className={styles.exercisesItem_topWrapper}>
        <p className={styles.exercisesItem_text}>workout</p>
        <button
          className={styles.exercisesItem_btnStart}
          onClick={() => {
            handleModalExercise();
          }}
        >
          Start
          <Svg
            iconId={'icon-arrow-right'}
            className={styles.exercisesItem_iconArrowRight}
          />
        </button>
      </div>

      <div className={styles.exercisesItem_nameWrapper}>
        <Svg iconId={'icon-run'} className={styles.exercisesItem_iconRun} />
        <h3 className={styles.exercisesItem_title}>{exercise.name}</h3>
      </div>
      <ul className={styles.exercisesItem_bottomList}>
        <li className={styles.exercisesItem_item}>
          Burned calories:
          <span className={styles.exercisesItem_itemText}>
            {exercise.burnedCalories}
          </span>
        </li>
        <li className={styles.exercisesItem_item}>
          Body pat:
          <span className={styles.exercisesItem_itemText}>
            {exercise.bodyPart}
          </span>
        </li>
        <li className={styles.exercisesItem_item}>
          Target:
          <span className={styles.exercisesItem_itemText}>
            {exercise.target}
          </span>
        </li>
      </ul>
      {modalExercise && (
        <BasicModalWindow handleModalToggle={handleModalExercise}>
          <AddExercises
            exercise={exercise}
            handleModalExercise={handleModalExercise}
            handleModalSuccess={handleModalSuccess}
          />
        </BasicModalWindow>
      )}
      {modalSuccess && (
        <BasicModalWindow handleModalToggle={handleModalSuccess}>
          <AddExercisesSuccess handleModalSuccess={handleModalSuccess} />
        </BasicModalWindow>
      )}
    </div>
  );
};

export default ExercisesItem;
