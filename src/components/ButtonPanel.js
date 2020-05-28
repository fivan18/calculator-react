import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="btn-panel d-flex">
      {groups.map((group, index) => (
        <div className="row" key={`group${index + 1}`}>
          {group.map(value => {
            if (/^([0-9]|\.|AC|\+\/-|%)$/.test(value)) {
              return value === '0'
                ? <Button clickHandler={clickHandler} color="#e0e0e0" wide key={value} value={value} />
                : <Button clickHandler={clickHandler} color="#e0e0e0" key={value} value={value} />;
            }
            return <Button clickHandler={clickHandler} key={value} value={value} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
