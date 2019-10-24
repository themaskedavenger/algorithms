"use strict";
/**
 * @file Test page.
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ClassName = /** @class */ (function (_super) {
    __extends(ClassName, _super);
    function ClassName(props) {
        return _super.call(this, props) || this;
    }
    ClassName.prototype.render = function () {
        var className = this.props.className;
        var classes = [''];
        if (className) {
            classes.push(className);
        }
        return (react_1.default.createElement("div", { className: classes.join(' ') }));
    };
    return ClassName;
}(react_1.Component));
exports.default = ClassName;
//# sourceMappingURL=testpage.js.map