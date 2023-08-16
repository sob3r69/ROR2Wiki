import React, { useState } from 'react';
import style from './sCalc.module.css';
import { CalcBear } from '@/utility/CalcFuncs';

const StackCalculator = () => {
  const [amount, setAmount] = useState(0);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    value >= 1 ? setAmount(parseInt(event.target.value)) : setAmount(0);
    console.log(event.target.value);
  };

  return (
    <>
      <p>Count</p>
      <div className={style.container}>
        <input type="number" className={style.numField} onChange={handleInput} />=
        <p className="cIsHealing">{CalcBear(amount)}%</p>
      </div>
    </>
  );
};

export default StackCalculator;
