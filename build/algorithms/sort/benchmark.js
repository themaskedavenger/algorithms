"use strict";
/**
 * @file Benchmarks for sorting algorithms.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("../../util/test");
var benchmark_1 = require("../../util/benchmark");
var util_1 = require("../../data/util");
// eslint-disable-next-line no-console
console.log('\n\nSORT BENCHMARKS\n');
// eslint-disable-next-line no-console
console.log('Random arrays');
var baseArray = test_1.getRandomNumberArray(10000);
benchmark_1.runSortBenchmarks(util_1.sorters, baseArray);
// eslint-disable-next-line no-console
console.log('\n');
//# sourceMappingURL=benchmark.js.map