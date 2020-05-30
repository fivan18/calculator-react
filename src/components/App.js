import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars


class App extends React.Component {
  constructor(props) {
    super(props);
    // the state was created to skip linter errors
    this.state = {
      dummy: '',
    };
  }

  render() {
    const { dummy } = this.state;
    return (
      <div className="app d-flex">
        {dummy}
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
