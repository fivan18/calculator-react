import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app d-flex">
        <Display result={total || next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
