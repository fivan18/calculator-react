import React from 'react';
import Big from 'big.js'; // eslint-disable-line import/extensions
import PropTypes from 'prop-types';

function App(props) {
  const { enterString } = props;
  const rest = Big(123.4567).minus(Big(enterString));
  return (
    <div>
      <header>
        Template ready
      </header>
      <div>
        Big(123.4567).minus(Big(props.enterString)) =
        {' '}
        {rest.toString()}
      </div>
    </div>
  );
}

App.propTypes = {
  enterString: PropTypes.string.isRequired,
};

export default App;
