import styles from './HomeBG.module.scss';
import PropTypes from 'prop-types';

const HomeBG = ({ children, className }) => {
  const wrapperBgClass = `${styles.wrapper_bg} ${className || ''}`;

  return <div className={wrapperBgClass}>{children}</div>;
};

export default HomeBG;

HomeBG.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
