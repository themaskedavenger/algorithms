"use strict";
/**
 * @file Utility data.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InsertionSorter_1 = __importDefault(require("../algorithms/sort/InsertionSorter"));
var JSNativeSorter_1 = __importDefault(require("../algorithms/sort/JSNativeSorter"));
var SelectionSorter_1 = __importDefault(require("../algorithms/sort/SelectionSorter"));
var ShellSorter_1 = __importDefault(require("../algorithms/sort/ShellSorter"));
exports.sorters = [JSNativeSorter_1.default, SelectionSorter_1.default, InsertionSorter_1.default, ShellSorter_1.default];
//# sourceMappingURL=util.js.map