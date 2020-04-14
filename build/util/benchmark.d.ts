/**
 * @file Benchmark utility functions.
 */
import { ISorterBenchmarkInfo } from '../types';
import Sorter from '../algorithms/sort/Sorter';
export declare const getSortBenchmarks: (sorters: (typeof Sorter)[], array: number[]) => ISorterBenchmarkInfo[];
export declare const displaySortBenchmarks: (benchmarks: ISorterBenchmarkInfo[]) => void;
export declare const runSortBenchmarks: (sorters: (typeof Sorter)[], array: number[]) => void;
