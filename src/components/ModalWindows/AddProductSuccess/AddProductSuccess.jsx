import { Link } from 'react-router-dom';
import Button from 'components/Buttons/Button';
import Svg from 'components/Svg/Svg';
import mango from '../../../images/mango.png';

import { DIARY_ROUTE } from 'routes/constants';
import styles from './AddProductSuccess.module.scss';

const AddProductSuccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={mango} alt="Mango" className={styles.img} />
          <p className={styles.title}>Well done</p>

          <p className={styles.text}>
            Calories:
            <span className={styles.span}>150</span>
          </p>
        </div>

        <Button text="Next product" type="button" className={styles.btn_next} />

        <Link to={DIARY_ROUTE}>
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

export default AddProductSuccess;
