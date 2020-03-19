"use strict";
/* eslint-disable import/no-extraneous-dependencies */
/**
 * @file Test page.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TestPage = function (_a) {
    var className = _a.className;
    var classes = [''];
    if (className) {
        classes.push(className);
    }
    return (react_1.default.createElement("div", { className: classes.join(' ') }));
};
exports.default = TestPage;
//# sourceMappingURL=testpage.js.map