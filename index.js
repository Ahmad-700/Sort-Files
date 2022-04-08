"use strict";
/**
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var config = {
    path: "C:\\Users\\Ahmed\\Desktop\\Tests Folder\\test",
    ignoreNotDigitalize: false,
    ignoreDuplicate: false,
    ignoreJumping: false,
    sleepAfterDisplay: 3000
};
//Do NOT Touch Below
var fileSystem = require("fs");
var fs = fileSystem.promises;
function main() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var totalFiles, dir, dir_1, dir_1_1, f, e_1_1, myFiles;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    totalFiles = 0;
                    if (!config.path) return [3 /*break*/, 2];
                    return [4 /*yield*/, fs.opendir(config.path)];
                case 1:
                    dir = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 13]);
                    dir_1 = __asyncValues(dir);
                    _b.label = 3;
                case 3: return [4 /*yield*/, dir_1.next()];
                case 4:
                    if (!(dir_1_1 = _b.sent(), !dir_1_1.done)) return [3 /*break*/, 6];
                    f = dir_1_1.value;
                    if (f.isDirectory())
                        throw new Error("There is a Directory named: ".concat(f.name, ". In the path provided! ").concat(config.path));
                    totalFiles++;
                    _b.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _b.trys.push([8, , 11, 12]);
                    if (!(dir_1_1 && !dir_1_1.done && (_a = dir_1["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(dir_1)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [4 /*yield*/, fs.readdir(config.path)];
                case 14:
                    myFiles = (_b.sent()).map(function (v, i, arr) {
                        var f = v.substring(0, v.lastIndexOf('.'));
                        var regEx = f.match(/(\d+)/g);
                        return regEx ? { name: v, number: Number(regEx[0]) }
                            : { name: v, number: null };
                    }).sort(function (a, b) { return a.number > b.number ? 1 : (a.number < b.number ? -1 : 0); });
                    checkValidConfig(myFiles);
                    myFiles = myFiles.filter(function (a) { if (a.number)
                        return a; });
                    console.table(myFiles);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _i, myFiles_1, file;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('done');
                                            _i = 0, myFiles_1 = myFiles;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < myFiles_1.length)) return [3 /*break*/, 4];
                                            file = myFiles_1[_i];
                                            return [4 /*yield*/, fs.rename(config.path + '\\' + file.name, "".concat(config.path, "\\").concat(file.number, "- ").concat(file.name))];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            resolve('');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, config.sleepAfterDisplay);
                        })];
                case 15:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function checkValidConfig(files) {
    var e = 'Configuration Violation in';
    var v = "Invalid Configuration!";
    if (config.sleepAfterDisplay < 0)
        throw new Error("".concat(v, " sleepAfterDisplay should be 0 or more. Found ").concat(config.sleepAfterDisplay));
    if (typeof config.ignoreDuplicate !== 'boolean')
        throw new Error("".concat(v, " ignoreDuplicate should be true or false. Found ").concat(config.ignoreDuplicate));
    if (typeof config.ignoreJumping !== 'boolean')
        throw new Error("".concat(v, " ignoreJumping should be true or false. Found ").concat(config.ignoreJumping));
    if (typeof config.ignoreNotDigitalize !== 'boolean')
        throw new Error("".concat(v, " ignoreNotDigitalize should be true or false. Found ").concat(config.ignoreNotDigitalize));
    //checking
    if (config.ignoreNotDigitalize === false && files.map(function (a) { return a.number; }).includes(null))
        throw new Error("".concat(e, " ignoreNotDigitalize; file '").concat(JSON.stringify(files[files.map(function (a) { return a.number; }).indexOf(null)]), "' dose not contain a number."));
    if (config.ignoreDuplicate === false)
        files.map(function (a) { return a.number; }).forEach(function (v, i, arr) {
            if (arr[i + 1] && v == arr[i + 1])
                throw new Error("".concat(e, " ignoreDuplicate; two files have the same number '").concat(JSON.stringify(files[i]), "' and '").concat(JSON.stringify(files[i + 1]), "'"));
        });
    if (config.ignoreJumping == false) {
        var toSort = __spreadArray([], files.map(function (f) { return f.number; }), true);
        toSort.sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
        toSort.forEach(function (v, i, arr) {
            if (arr[i] && arr[i + 1])
                if (arr[i] != arr[i + 1])
                    if (arr[i] != arr[i + 1] - 1)
                        throw new Error("".concat(e, " ignoreJumping; there is incorrect increment in numbers for file '").concat(JSON.stringify(files[files.map(function (f) { return f.number; }).indexOf(arr[i])]), "' and  '").concat(JSON.stringify(files[files.map(function (f) { return f.number; }).indexOf(arr[i + 1])]), "'"));
        });
        console.log('sorted', toSort);
    }
}
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var t;
        return __generator(this, function (_a) {
            t = 'te36ts';
            console.log(t.match(/(\d+)/g), 'stackOverFlow');
            console.log(t.match(/[0-9]/g), 'mine');
            return [2 /*return*/];
        });
    });
}
var wrapper = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                console.time('process Time');
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, main()];
            case 1:
                _a = _b.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, test()];
            case 3:
                _a = _b.sent();
                _b.label = 4;
            case 4:
                _a;
                console.timeEnd('process Time');
                return [3 /*break*/, 6];
            case 5:
                e_2 = _b.sent();
                console.log('wrapper catch', e_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
wrapper();
