import Big from 'big.js'; // eslint-disable-line import/extensions

const operations = {
  '+': (a, b) => a.plus(b),
  '-': (a, b) => a.minus(b),
  x: (a, b) => a.times(b),
  '÷': (a, b) => (b.cmp(0) === 0 ? 'NotDividedDy0' : a.div(b)),
  '%': (a, b) => a.div(100).times(b),
};
const operate = (numberOne, numberTwo, operation) => operations[operation](Big(numberOne),
  Big(numberTwo)).toString();

export default operate;
