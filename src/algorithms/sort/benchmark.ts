/**
 * @file Benchmarks for sorting algorithms.
 */

import { performance } from 'perf_hooks';

import { getRandomNumberArray } from '../../util/test';
import { runSortBenchmarks } from '../../util/benchmark';

import { sorters } from '../../data/util';

// eslint-disable-next-line no-console
console.log('\n\nSORT BENCHMARKS\n');

// eslint-disable-next-line no-console
console.log('Random arrays');
const baseArray = getRandomNumberArray(10000);
runSortBenchmarks(sorters, baseArray);

// eslint-disable-next-line no-console
console.log('\n');
