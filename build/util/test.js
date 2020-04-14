"use strict";
/**
 * @file Test utilities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumberArray = function (N, max) {
    if (N === void 0) { N = 1000; }
    if (max === void 0) { max = 1000; }
    var a = [];
    for (var i = 1; i <= N; i += 1) {
        a.push(Math.round(Math.random() * max));
    }
    return a;
};
//# sourceMappingURL=test.js.map