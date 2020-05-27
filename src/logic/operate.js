import Big from 'big.js'; // eslint-disable-line import/extensions

const operations = {
  '+': (a, b) => a.plus(b),
  '-': (a, b) => a.minus(b),
  x: (a, b) => a.times(b),
  '÷': (a, b) => (b === 0 ? null : a.div(b)),
  '%': (a, b) => a.div(100).times(b),
};
const operate = (numberOne, numberTwo, operation) => operations[operation](Big(numberOne),
  Big(numberTwo));

export default operate;
