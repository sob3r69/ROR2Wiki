export function HyperBolic(amount: number, initValue: number) {
  return (1 - 1 / (initValue * amount + 1)) * 100;
}

export function Linear(amount: number, initValue: number, iterValue: number) {
  return initValue + iterValue * amount;
}
