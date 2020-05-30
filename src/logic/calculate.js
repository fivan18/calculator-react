import Big from 'big.js'; // eslint-disable-line import/extensions
import operate from './operate';

/* ******************* helper methods ******************* */
function validNumber(number) {
  return /^(-)?[0-9]\d*(\.\d+)?$/.test(number)
         || /^(-)?(\.)?[0-9]\d*$/.test(number);
}
function changeSign(number) {
  const bigNumber = Big(number);
  bigNumber.s *= -1;
  return bigNumber.toString();
}
function invalid() {
  return { total: null, next: 'Invalid', operation: null };
}

/* ******************* 'AC', '=', '+/-' ******************* */
const calculations = {
  AC: () => ({ total: null, next: null, operation: null }),
  '=': data => {
    const { total, next, operation } = data;
    return next && total && validNumber(next) && validNumber(total)
      ? { total: null, next: operate(total, next, operation), operation: null }
      : invalid();
  },
  '+/-': data => {
    let { total, next } = data;
    const { operation } = data;

    if (total) {
      if (validNumber(total)) {
        total = changeSign(total);
      } else {
        return invalid();
      }
    }

    if (next) {
      if (validNumber(next)) {
        next = changeSign(next);
      } else {
        return invalid();
      }
    }

    return { total, next, operation };
  },
};

/* ******************* '+', 'x', '÷', '%' ******************* */
const doOperate = (data, operationEnter) => {
  const { total, next, operation } = data;
  if (!next) {
    return { total, next, operation };
  } if (total) {
    return validNumber(next) && validNumber(total)
      ? { total: operate(total, next, operation), next: null, operation: operationEnter }
      : invalid();
  }
  return validNumber(next)
    ? { total: next, next: null, operation: operationEnter }
    : invalid();
};
['+', 'x', '÷', '%'].forEach(operation => {
  calculations[operation] = doOperate;
});

/* ******************* '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.' ******************* */
const doGenerateNumber = (data, digit) => {
  let { next } = data;
  const { operation, total } = data;
  if (next) {
    next += digit;
  } else {
    next = digit;
  }
  return { next, total, operation };
};
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].forEach(digit => {
  calculations[digit] = doGenerateNumber;
});

/* ******************* '-' ******************* */
const minusButton = (data, minusSymbol) => {
  const { next } = data;
  if (next) {
    return doOperate(data, minusSymbol);
  }
  return doGenerateNumber(data, minusSymbol);
};
calculations['-'] = minusButton;

/* ******************* calculate method ******************* */
const calculate = (data, buttonName) => calculations[buttonName](data, buttonName);

export default calculate;
