import PropTypes from 'prop-types';

const Button = ({ text, className, disabled, type }) => {
  return (
    <button className={className} disabled={disabled} type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
