import Svg from 'components/Svg/Svg';
import styles from './ExercisesItem.module.scss';

const ExercisesItem = ({ exercise, toggleModal }) => {
  return (
    <div className={styles.exercisesItem_wrapper}>
      <div className={styles.exercisesItem_topWrapper}>
        <p className={styles.exercisesItem_text}>workout</p>
        <button
          className={styles.exercisesItem_btnStart}
          onClick={() => {
            toggleModal();
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
    </div>
  );
};

export default ExercisesItem;
