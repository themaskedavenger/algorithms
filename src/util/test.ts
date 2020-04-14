/**
 * @file Test utilities.
 */

export const getRandomNumberArray = (
  N = 1000,
  max = 1000,
): number[] => {
  const a: number[] = [];
  for (let i = 1; i <= N; i += 1) {
    a.push(Math.round(Math.random() * max));
  }
  return a;
};
