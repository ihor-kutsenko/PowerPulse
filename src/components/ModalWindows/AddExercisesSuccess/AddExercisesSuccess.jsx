import { Link } from 'react-router-dom';

import Button from 'components/Buttons/Button';
import Svg from 'components/Svg/Svg';
import like from '../../../images/like-2x.png';

import { EXERCISES_ROUTE, DIARY_ROUTE } from 'routes/constants';
import styles from './AddExercisesSuccess.module.scss';

const AddExercisesSuccess = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={like} alt="Like" className={styles.img} />
          <p className={styles.title}>Well done</p>
          <p className={styles.text}>
            Your time:
            <span className={styles.span}>3 minutes</span>
          </p>
          <p className={styles.text}>
            Burned calories:
            <span className={styles.span}>150</span>
          </p>
        </div>
        <Link to={EXERCISES_ROUTE} onClick={closeModal}>
          <Button
            text="Next exercise"
            type="button"
            className={styles.btn_next}
          />
        </Link>
        <Link to={DIARY_ROUTE} onClick={closeModal}>
          <p className={styles.text}>
            To the diary
            <Svg iconId={'icon-arrow-right'} className={styles.icon_right} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AddExercisesSuccess;
