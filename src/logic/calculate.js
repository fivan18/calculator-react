import Big from 'big.js'; // eslint-disable-line import/extensions
import operate from './operate';
import { number } from 'prop-types';

function validNumber(number){
  return /^(-)?[0-9]\d*(\.\d+)?$/.test(number);
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

// '=', '-'
const doOperate = (data, operationEnter) => {
  const { total, next, operation } = data;
  if(!next){
    return { total, next, operation };
  } else if(total){
    return validNumber(next) && validNumber(total) ?
      { total: operate(total, next, operation), next: null, operation: operationEnter } :
      { total: null, next: 'Invalid', operation: null };
  } else {
    return validNumber(next) ? 
      { total: next, next: null, operation: operationEnter } :
      { total: null, next: 'Invalid', operation: null };
  }
};
['+', 'x', '÷', '%'].forEach(operation => {
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
const calculate = (data, buttonName) => calculations[buttonName](data, buttonName);

export default calculate;
