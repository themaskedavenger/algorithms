"use strict";
/**
 * @file Selection sorter class.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var ShellSorter = /** @class */ (function (_super) {
    __extends(ShellSorter, _super);
    function ShellSorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShellSorter.hSort = function (a, h) {
        for (var i = h; i < a.length; i += h) {
            for (var j = 0; j < i; j += h) {
                if (ShellSorter.less(a[i], a[j])) {
                    var t = a[i];
                    for (var k = i; k > j; k -= 1) {
                        a[k] = a[k - 1];
                    }
                    a[j] = t;
                    break;
                }
            }
        }
    };
    ShellSorter.sort = function (a) {
        ShellSorter.hSort(a, 1);
    };
    return ShellSorter;
}(Sorter_1.default));
exports.default = ShellSorter;
//# sourceMappingURL=ShellSorter.js.map