import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display d-flex">
    <div>
      { result }
    </div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
