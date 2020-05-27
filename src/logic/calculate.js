import Big from 'big.js'; // eslint-disable-line import/extensions
import operate from './operate';

const calculations = {
  AC: () => ({ total: '', next: '', operation: '' }),
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

const calculate = (data, buttonName) => calculations[buttonName](data);

export default calculate;
