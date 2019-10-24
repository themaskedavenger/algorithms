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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var apollo_1 = require("@enmesh/apollo");
var core_1 = require("@enmesh/core");
var pages_1 = require("@enmesh/pages");
var webserver_1 = require("@enmesh/webserver");
var testPagePath = path_1.resolve(__dirname, '../../build/testpages');
var name = '';
var port = 4000;
var pageName1 = name + "Page1";
var webServerName1 = name + "WebServer";
var title = name + " Title";
var pageList = (_a = {},
    _a[webServerName1] = (_b = {},
        _b[pageName1] = {
            title: title,
            pageName: pageName1,
            pagePath: testPagePath,
        },
        _b),
    _a);
var enmesh = new core_1.Enmesh();
var webserver = new webserver_1.WebserverModule();
var pages = new pages_1.PagesModule();
var apollo = new apollo_1.ApolloModule();
var enmeshInitModules = [
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
    [
        apollo,
        {
            servers: (_d = {},
                _d[webServerName1] = {
                    schemata: {
                        typeDefs: "\n                  type Query {\n                    testQuery: String!\n                  }\n                ",
                        resolvers: {
                            Query: {
                                testQuery: function () { return 'Hello World!'; },
                            },
                        },
                    },
                    queries: {},
                },
                _d),
        },
    ],
];
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, enmesh.init(enmeshInitModules)];
            case 1:
                _a.sent();
                return [4 /*yield*/, enmesh.webserver[webServerName1].start()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=webtest.js.map