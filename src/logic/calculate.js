import Big from 'big.js'; // eslint-disable-line import/extensions
import operate from './operate';
import { number } from 'prop-types';

function validNumber(number){
  return /^(-)?[1-9]\d*(\.\d+)?$/.test(number);
}
function changeSign(number){
  const bigNumber = Big(number);
  bigNumber.s *= -1;
  return bigNumber.toString();
}

const calculations = {
  AC: () => ({ total: null, next: null, operation: null }),
  '+/-': data => {
    let { total, next } = data;
    const { operation } = data;
    total = Big(total);
    next = Big(next);
    total.s *= -1;
    next.s *= -1;
    return { total: total.toString(), next: next.toString(), operation };
  },
};
const doOperate = data => {
  const { total, next, operation } = data;
  return { total: operate(next, total, operation), next: '', operation: '' };
};
['=', '+', '-', 'x', '÷', '%'].forEach(operation => {
  calculations[operation] = doOperate;
});

const doGenerateNumber = (data, digit) => {
  let { next } = data;
  const { operation, total } = data;
  if(next){
    next += digit;
  } else {
    next = digit;
  }
  return { next, total, operation };
};
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.'].forEach(digit => {
  calculations[digit] = doGenerateNumber;
});
const calculate = (data, buttonName) => calculations[buttonName](data);

export default calculate;
