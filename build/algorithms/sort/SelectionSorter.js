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
var SelectionSorter = /** @class */ (function (_super) {
    __extends(SelectionSorter, _super);
    function SelectionSorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionSorter.sort = function (a) {
        for (var i = 0; i < a.length; i += 1) {
            var min = void 0;
            var minKey = i;
            for (var j = i; j < a.length; j += 1) {
                if (typeof min === 'undefined' || SelectionSorter.less(a[j], min)) {
                    min = a[j];
                    minKey = j;
                }
            }
            SelectionSorter.exch(a, i, minKey);
        }
    };
    return SelectionSorter;
}(Sorter_1.default));
exports.default = SelectionSorter;
//# sourceMappingURL=SelectionSorter.js.map