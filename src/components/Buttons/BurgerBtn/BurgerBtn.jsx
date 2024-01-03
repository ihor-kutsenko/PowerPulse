import PropTypes from 'prop-types';

import Svg from 'components/Svg/Svg';
import styles from './BurgerBtn.module.scss';

const BurgerBtn = ({ onClick }) => {
  return (
    <button className={styles.burgerBtn} onClick={onClick}>
      <Svg iconId="icon-mobile-menu" className={styles.iconBurger} />
    </button>
  );
};

export default BurgerBtn;

BurgerBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
