/**
 * @file Test assertions helper functions.
 */
import Sorter from '../algorithms/sort/Sorter';
import { getRandomNumberArray } from './test';

export const assertSorterWorks = (
  t: any,
  nameString: string,
  sorter: typeof Sorter,
  N = 1000,
  max = 1000,
): void => {
  const a = getRandomNumberArray(N, max);

  const lengthStart = a.length;
  const aStart = a.concat();

  sorter.sort(a);

  t.is(lengthStart, a.length);
  t.true(sorter.isSorted(a));
};
