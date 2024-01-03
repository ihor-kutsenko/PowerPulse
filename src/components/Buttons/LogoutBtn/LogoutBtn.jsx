import PropTypes from 'prop-types';

import Svg from 'components/Svg/Svg';
import styles from './LogoutBtn.module.scss';

const LogoutBtn = ({ className, onClick }) => {
  const btnClassName = `${styles.btn_logout} ${className || ''}`;

  return (
    <button className={btnClassName} onClick={onClick}>
      <span>Logout</span>
      <Svg iconId="icon-logout" className={styles.icon_logout} />
    </button>
  );
};

export default LogoutBtn;

LogoutBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
