export function HyperBolic(amount: number) {
  return (1 - 1 / (0.15 * amount + 1)) * 100;
}
