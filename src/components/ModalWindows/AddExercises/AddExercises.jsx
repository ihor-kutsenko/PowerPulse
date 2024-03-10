import Button from 'components/Buttons/Button';

import capitalizedWord from 'utils/capitalizedWord';
import styles from './AddExercises.module.scss';

const AddExercises = ({
  exercise,
  handleModalExercise,
  handleModalSuccess,
}) => {
  const handleAddToDiary = () => {
    handleModalExercise();
    handleModalSuccess();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_side}>
          <div className={styles.img_wrapper}>
            <img
              src={exercise.gifUrl}
              alt="Exercise example"
              className={styles.img_gif}
            />
          </div>
          <p className={styles.time}>Time</p>
          <div className={styles.timer_wrapper}>Timer: {exercise.time}</div>
        </div>

        <div className={styles.info_wrapper}>
          <ul className={styles.info_list}>
            <li className={styles.info_item}>
              <p className={styles.info_text}>Name:</p>
              <strong className={styles.info_title}>
                {capitalizedWord(exercise.name)}
              </strong>
            </li>
            <li className={styles.info_item}>
              <p className={styles.info_text}>Body part:</p>
              <strong className={styles.info_title}>
                {capitalizedWord(exercise.bodyPart)}
              </strong>
            </li>
            <li className={styles.info_item}>
              <p className={styles.info_text}>Target:</p>
              <strong className={styles.info_title}>
                {capitalizedWord(exercise.target)}
              </strong>
            </li>
            <li className={styles.info_item}>
              <p className={styles.info_text}>Equipment:</p>
              <strong className={styles.info_title}>
                {capitalizedWord(exercise.equipment)}
              </strong>
            </li>
          </ul>
          <Button
            text="Add to diary"
            type="submit"
            className={styles.btn_add}
            onClick={handleAddToDiary}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExercises;
