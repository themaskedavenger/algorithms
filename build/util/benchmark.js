"use strict";
/**
 * @file Benchmark utility functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var perf_hooks_1 = require("perf_hooks");
var string_1 = require("./string");
exports.getSortBenchmarks = function (sorters, array) { return sorters.map(function (sorter) {
    var name = sorter.prototype.constructor.name;
    var a = array.concat();
    var t0 = perf_hooks_1.performance.now();
    sorter.sort(a);
    var t1 = perf_hooks_1.performance.now();
    return {
        name: name,
        time: t1 - t0,
    };
}); };
exports.displaySortBenchmarks = function (benchmarks) {
    var avgTime = benchmarks.reduce(function (total, _a) {
        var time = _a.time;
        return total + time;
    }, 0) / benchmarks.length;
    for (var _i = 0, benchmarks_1 = benchmarks; _i < benchmarks_1.length; _i++) {
        var _a = benchmarks_1[_i], name = _a.name, time = _a.time;
        var avgDiff = ((time - avgTime) / avgTime) * 100;
        // eslint-disable-next-line no-console
        console.log(name + ": " + string_1.roundString(time, 3) + "ms (" + (avgDiff >= 0 ? '+' : '') + string_1.roundString(avgDiff, 1) + "%)");
    }
};
exports.runSortBenchmarks = function (sorters, array) { return (exports.displaySortBenchmarks(exports.getSortBenchmarks(sorters, array))); };
//# sourceMappingURL=benchmark.js.map