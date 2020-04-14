"use strict";
/**
 * @file Math utility functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = function (n, decimals, roundFn) {
    if (decimals === void 0) { decimals = 0; }
    if (roundFn === void 0) { roundFn = 'round'; }
    var pow = Math.pow(10, decimals);
    return (Math[roundFn](n * pow) / pow) + 0;
};
exports.roundToN = function (n, roundTo, roundFn) {
    if (roundTo === void 0) { roundTo = 1; }
    if (roundFn === void 0) { roundFn = 'round'; }
    return (Math[roundFn](n / roundTo) * roundTo) + 0;
};
exports.random = function (min, max, decimals) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    var range = max - min;
    var n = (Math.random() * range) + min + 0;
    return decimals === undefined ? n : exports.round(n, decimals);
};
//# sourceMappingURL=math.js.map