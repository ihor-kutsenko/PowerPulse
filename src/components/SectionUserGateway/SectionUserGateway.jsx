import PropTypes from 'prop-types';
import styles from './SectionUserGateway.module.scss';

const SectionUserGateway = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default SectionUserGateway;

SectionUserGateway.propTypes = {
  children: PropTypes.node.isRequired,
};
