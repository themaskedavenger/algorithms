"use strict";
/**
 * @file  Enmesh module class.
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
var core_1 = require("@enmesh/core");
var init_1 = __importDefault(require("../emitters/init"));
var handler1_1 = __importDefault(require("../handlers/handler1"));
var Module = /** @class */ (function (_super) {
    __extends(Module, _super);
    function Module() {
        return _super.call(this, {
            name: '',
            emitters: {
                handler1: handler1_1.default,
            },
            handlers: {
                core: {
                    init: init_1.default,
                },
            },
            dependencies: [],
            data: {},
        }) || this;
    }
    return Module;
}(core_1.EnmeshModule));
exports.default = Module;
//# sourceMappingURL=Module.js.map