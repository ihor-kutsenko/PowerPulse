import { Link } from 'react-router-dom';

import Button from 'components/Buttons/Button';
import Svg from 'components/Svg/Svg';
import like from '../../../images/like-2x.png';

import { DIARY_ROUTE } from 'routes/constants';
import styles from './AddExercisesSuccess.module.scss';

const AddExercisesSuccess = ({ handleModalSuccess, selectedExercise }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={like} alt="Like" className={styles.img} />
          <p className={styles.title}>Well done</p>
          <p className={styles.text}>
            Your time:
            <span className={styles.span}>{selectedExercise.time}</span>
          </p>
          <p className={styles.text}>
            Burned calories:
            <span className={styles.span}>{selectedExercise.calories}</span>
          </p>
        </div>

        <Button
          text="Next exercise"
          type="button"
          className={styles.btn_next}
          onClick={handleModalSuccess}
        />

        <Link to={DIARY_ROUTE} onClick={handleModalSuccess}>
          <div className={styles.link_wrapper}>
            <p className={styles.text}>
              To the diary
              <Svg iconId={'icon-arrow-right'} className={styles.icon_right} />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddExercisesSuccess;
