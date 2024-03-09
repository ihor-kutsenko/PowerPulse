import Button from 'components/Buttons/Button';

import capitalizedWord from 'utils/capitalizedWord';
import styles from './AddExercises.module.scss';

const AddExercises = ({ exercise }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_side}>
          <div className={styles.img_wrapper}>
            <img src={exercise.gifUrl} alt="Exercise example" />
          </div>
          <p></p>
          <p>Timer: {exercise.time}</p>
        </div>

        <div className={styles.info_wrapper}>
          <ul>
            <li>
              <p>Name:</p>
              <strong>{capitalizedWord(exercise.name)}</strong>
            </li>
            <li>
              <p>Body part:</p>
              <strong>{capitalizedWord(exercise.bodyPart)}</strong>
            </li>
            <li>
              <p>Target:</p>
              <strong>{capitalizedWord(exercise.target)}</strong>
            </li>
            <li>
              <p>Equipment:</p>
              <strong>{capitalizedWord(exercise.equipment)}</strong>
            </li>
          </ul>
          <Button
            text="Add to diary"
            type="submit"
            className={styles.btn_add}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExercises;
