import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';

function Svg({ className, iconId, onClick }) {
  return (
    <svg className={className} preserveAspectRatio="none" onClick={onClick}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
}

Svg.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Svg;
