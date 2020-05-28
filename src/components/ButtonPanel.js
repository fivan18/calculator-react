import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div>
      {groups.map((group, index) => (
        <div key={`group${index + 1}`}>{group.map(value => <Button key={value} value={value} />)}</div>
      ))}
    </div>
  );
};

export default ButtonPanel;
