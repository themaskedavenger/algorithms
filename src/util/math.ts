/**
 * @file Math utility functions.
 */

export type RoundFns = 'round' | 'floor' | 'ceil';

export const round = (
  n: number,
  decimals = 0,
  roundFn: RoundFns = 'round',
) => {
  const pow = 10 ** decimals;
  return (Math[roundFn](n * pow) / pow) + 0;
};

export const roundToN = (
  n: number,
  roundTo = 1,
  roundFn: RoundFns = 'round',
) => (Math[roundFn](n / roundTo) * roundTo) + 0;

export const random = (min = 0, max = 1, decimals?: number) => {
  const range = max - min;
  const n = (Math.random() * range) + min + 0;
  return decimals === undefined ? n : round(n, decimals);
};
