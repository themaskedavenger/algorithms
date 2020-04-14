"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./test");
exports.assertSorterWorks = function (t, nameString, sorter, N, max) {
    if (N === void 0) { N = 1000; }
    if (max === void 0) { max = 1000; }
    var a = test_1.getRandomNumberArray(N, max);
    var lengthStart = a.length;
    var aStart = a.concat();
    sorter.sort(a);
    t.is(lengthStart, a.length);
    t.true(sorter.isSorted(a));
};
//# sourceMappingURL=testassertions.js.map