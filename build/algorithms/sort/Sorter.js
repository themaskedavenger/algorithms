"use strict";
/**
 * @file Main sorter class.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.sort = function (a) { };
    Sorter.less = function (v, w) {
        return v < w;
    };
    Sorter.exch = function (a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    };
    Sorter.show = function (a) {
        // eslint-disable-next-line no-console
        console.log('Array:', a);
    };
    Sorter.isSorted = function (a) {
        for (var i = 1; i < a.length; i += 1) {
            if (Sorter.less(a[i], a[i - 1]))
                return false;
        }
        return true;
    };
    return Sorter;
}());
exports.default = Sorter;
//# sourceMappingURL=Sorter.js.map