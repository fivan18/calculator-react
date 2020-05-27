import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, color, wide }) => {
  const style = wide ? {backgroundColor: color, width: '50%'} : {backgroundColor: color};
  return (
    <button type="button" style={style}>{ value }</button>
  );
}

Button.defaultProps = {
  color: '#f5913e',
  wide: false
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
