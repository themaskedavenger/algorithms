/**
 * @file Benchmark utility functions.
 */

import { performance } from 'perf_hooks';

import { ISorterBenchmarkInfo } from '../types';

import { roundString } from './string';

import Sorter from '../algorithms/sort/Sorter';

export const getSortBenchmarks = (
  sorters: (typeof Sorter)[],
  array: number[],
): ISorterBenchmarkInfo[] => sorters.map(
  sorter => {
    const {
      prototype: {
        constructor: {
          name,
        },
      },
    } = sorter;

    const a = array.concat();

    const t0 = performance.now();
    sorter.sort(a);
    const t1 = performance.now();

    return {
      name,
      time: t1 - t0,
    };
  },
);

export const displaySortBenchmarks = (
  benchmarks: ISorterBenchmarkInfo[],
): void => {
  const avgTime = benchmarks.reduce(
    (total, { time }) => total + time,
    0,
  ) / benchmarks.length;

  for (const { name, time } of benchmarks) {
    const avgDiff = ((time - avgTime) / avgTime) * 100;

    // eslint-disable-next-line no-console
    console.log(`${name}: ${roundString(time, 3)}ms (${avgDiff >= 0 ? '+' : ''}${roundString(avgDiff, 1)}%)`);
  }
};

export const runSortBenchmarks = (
  sorters: (typeof Sorter)[],
  array: number[],
): void => (
  displaySortBenchmarks(getSortBenchmarks(sorters, array))
);
