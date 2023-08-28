import React, { useState } from 'react';
import style from './sCalc.module.css';
import { HyperBolic, Linear } from '@/utility/CalcFuncs';

type stack = {
  initVal: number;
  iterVal: number | null;
  stackSymbol: string;
  stackType: string;
};

const StackCalculator = ({ initVal, stackType, stackSymbol, iterVal }: stack) => {
  const [amount, setAmount] = useState(0);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    value >= 1 ? setAmount(parseInt(event.target.value)) : setAmount(0);
  };

  return (
    <>
      <p>Count</p>
      <div className={style.container}>
        <input
          min={0}
          title="stackField"
          type="number"
          className={style.numField}
          onChange={handleInput}
        />
        =
        <p className="cIsHealing">
          {stackType == 'Hyperbolic'
            ? HyperBolic(amount, initVal).toFixed(1)
            : Linear(amount, initVal, iterVal!)}
          {stackSymbol}
        </p>
      </div>
    </>
  );
};

export default StackCalculator;
