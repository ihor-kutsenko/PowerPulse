import styles from './HomeBG.module.scss';
import PropTypes from 'prop-types';

const HomeBG = ({ children }) => {
  return <div className={styles.wrapper_bg}>{children}</div>;
};

export default HomeBG;

HomeBG.propTypes = {
  children: PropTypes.node.isRequired,
};
