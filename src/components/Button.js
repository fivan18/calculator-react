import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value, color, wide, clickHandler,
}) => {
  const style = wide ? { backgroundColor: color, width: '50%' } : { backgroundColor: color };
  return (
    <button onClick={() => clickHandler(value)} type="button" style={style}>{ value }</button>
  );
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
