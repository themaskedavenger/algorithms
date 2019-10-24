"use strict";
/**
 * @file Sample unit test for Enmesh module.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var path_1 = require("path");
var puppeteer_1 = __importDefault(require("puppeteer"));
var core_1 = require("@enmesh/core");
var pages_1 = require("@enmesh/pages");
var assertions_1 = require("@enmesh/testutils/assertions");
var test_1 = require("@enmesh/testutils/test");
var webserver_1 = require("@enmesh/webserver");
var browser;
var testPagePath = path_1.resolve(__dirname, '../../build/testpages');
ava_1.default.before(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer_1.default.launch()];
            case 1:
                browser = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.after.always(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, test_1.afterAlwaysAsync([
                    browser.close(),
                ], {})];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('Sample test', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var name, port, pageName1, webServerName1, title, pageUrl1, page1, pageList, enmesh, webserver, pages, enmeshInitModules;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                name = '';
                port = 3000;
                pageName1 = name + "Page1";
                webServerName1 = name + "WebServer";
                title = name + " Title";
                pageUrl1 = "http://localhost:" + port + "/" + pageName1;
                pageList = (_a = {},
                    _a[webServerName1] = (_b = {},
                        _b[pageName1] = {
                            title: title,
                            pageName: pageName1,
                            pagePath: testPagePath,
                        },
                        _b),
                    _a);
                enmesh = new core_1.Enmesh();
                webserver = new webserver_1.WebserverModule();
                pages = new pages_1.PagesModule();
                enmeshInitModules = [
                    [
                        webserver,
                        (_c = {},
                            _c[webServerName1] = {
                                port: port,
                            },
                            _c),
                    ],
                    [
                        pages,
                        {
                            pages: pageList,
                            pagesFolder: 'build/pages',
                        },
                    ],
                ];
                return [4 /*yield*/, enmesh.init(enmeshInitModules)];
            case 1:
                _d.sent();
                return [4 /*yield*/, enmesh.webserver[webServerName1].start()];
            case 2:
                _d.sent();
                return [4 /*yield*/, assertions_1.assertPageContains(t, [name, 'Req1'], browser, pageUrl1, {
                        stringContains: [],
                        stringDoesNotContain: [],
                        // tslint:disable-next-line:no-console
                        consoleFn: function (msg) { return console.log(msg.text()); },
                        defaultTimeout: 2000,
                    })];
            case 3:
                page1 = _d.sent();
                return [4 /*yield*/, page1.click('#')];
            case 4:
                _d.sent();
                return [4 /*yield*/, page1.type('#', 'a')];
            case 5:
                _d.sent();
                return [4 /*yield*/, page1.waitForSelector('', { timeout: 1000 })];
            case 6:
                _d.sent();
                return [4 /*yield*/, assertions_1.assertPageContains(t, [name, 'Req1', 'FirstClick'], page1, null, {
                        stringContains: [],
                        stringDoesNotContain: [],
                    })];
            case 7:
                page1 = _d.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=sample.js.map