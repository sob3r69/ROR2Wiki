import React, { useState } from 'react';
import style from './sCalc.module.css';
import { HyperBolic } from '@/utility/CalcFuncs';

const StackCalculator = () => {
  const [amount, setAmount] = useState(0);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    value >= 1 ? setAmount(parseInt(event.target.value)) : setAmount(0);
  };

  return (
    <>
      <p>Count</p>
      <div className={style.container}>
        <input title="stackField" type="number" className={style.numField} onChange={handleInput} />
        =<p className="cIsHealing">{HyperBolic(amount).toFixed(1)}%</p>
      </div>
    </>
  );
};

export default StackCalculator;
