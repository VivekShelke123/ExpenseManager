"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var UserDetail_1 = require("../models/UserDetail");
var bcrypt = require("bcrypt");
function setPass(password) {
    return __awaiter(this, void 0, void 0, function () {
        var hashedPassword, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, bcrypt.hash(password, 10)];
                case 1:
                    hashedPassword = _a.sent();
                    return [2 /*return*/, hashedPassword];
                case 2:
                    err_1 = _a.sent();
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
var addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, email, password, curr, pass, findUserName, findEmail, userData, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userName = _a.userName, email = _a.email, password = _a.password, curr = _a.curr;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                return [4 /*yield*/, setPass(password)];
            case 2:
                pass = _b.sent();
                return [4 /*yield*/, UserDetail_1.default.findOne({ userName: userName })];
            case 3:
                findUserName = _b.sent();
                return [4 /*yield*/, UserDetail_1.default.findOne({ email: email })];
            case 4:
                findEmail = _b.sent();
                if (!findEmail) return [3 /*break*/, 5];
                res.json('EmailUsed');
                return [3 /*break*/, 8];
            case 5:
                if (!findUserName) return [3 /*break*/, 6];
                res.json('UserNamePresent');
                return [3 /*break*/, 8];
            case 6:
                userData = new UserDetail_1.default({ userName: userName, email: email, password: pass, curr: curr });
                return [4 /*yield*/, userData.save()];
            case 7:
                data = _b.sent();
                res.status(200).send({ data: data });
                _b.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_1 = _b.sent();
                console.error(error_1); // Log the error for debugging purposes
                res.status(500).send({ mssg: 'Adding user failed' });
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, email, password, findData, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userName = _a.userName, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, UserDetail_1.default.findOne({ userName: userName })];
            case 2:
                findData = _b.sent();
                if (!findData) {
                    res.json("NotFound");
                }
                else {
                    bcrypt.compare(password, findData.password, function (err, result) {
                        if (err) {
                            // Handle error
                            console.error(err);
                        }
                        else {
                            if (result) {
                                res.json("Found");
                            }
                            else {
                                res.json("Incorrect");
                            }
                        }
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(500).send({ mssg: 'failed to check' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, newUserName, user, data, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userName = _a.userName, newUserName = _a.newUserName;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, UserDetail_1.default.findOne({ userName: userName })];
            case 2:
                user = _b.sent();
                if (!user) return [3 /*break*/, 4];
                user.userName = newUserName;
                return [4 /*yield*/, user.save()];
            case 3:
                data = _b.sent();
                res.status(200).send(data);
                return [3 /*break*/, 5];
            case 4:
                res.status(404).send({ mssg: 'User Not Found' });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _b.sent();
                res.send(error_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
var updatePass = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pass, newPass, userName, findData, result, _b, data, error_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, pass = _a.pass, newPass = _a.newPass, userName = _a.userName;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 8, , 9]);
                return [4 /*yield*/, UserDetail_1.default.findOne({ userName: userName })];
            case 2:
                findData = _c.sent();
                if (!findData) {
                    res.status(404).send({ mssg: 'User not found' });
                    return [2 /*return*/]; // Added return to exit function after sending response
                }
                return [4 /*yield*/, bcrypt.compare(pass, findData.password)];
            case 3:
                result = _c.sent();
                if (!result) return [3 /*break*/, 6];
                _b = findData;
                return [4 /*yield*/, setPass(newPass)];
            case 4:
                _b.password = _c.sent();
                return [4 /*yield*/, findData.save()];
            case 5:
                data = _c.sent();
                res.status(200).json('Changed');
                return [3 /*break*/, 7];
            case 6:
                res.json('Incorrect');
                _c.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_4 = _c.sent();
                console.error(error_4);
                res.status(500).send("Internal Server Error");
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
var getCurr = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userName, currData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userName = req.params.userName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, UserDetail_1.default.findOne({ userName: userName })];
            case 2:
                currData = _a.sent();
                if (currData) {
                    res.send(currData === null || currData === void 0 ? void 0 : currData.curr);
                }
                else {
                    res.status(404).send({ mssg: "user may not exist" });
                }
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(500).send({ mssg: 'Error occured' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateCurr = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userName, newCurr, data, data1, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userName = req.params.userName;
                newCurr = req.body.newCurr;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, UserDetail_1.default.findOne({ userName: userName })];
            case 2:
                data = _a.sent();
                if (!data) return [3 /*break*/, 4];
                data.curr = newCurr;
                return [4 /*yield*/, data.save()];
            case 3:
                data1 = _a.sent();
                res.status(200).send(data1);
                return [3 /*break*/, 5];
            case 4:
                res.status(404).send({ mssg: "user not found" });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_6 = _a.sent();
                res.status(500).send({ mssg: 'Error Occured' });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.default = { addUser: addUser, getUser: getUser, updateUser: updateUser, updatePass: updatePass, getCurr: getCurr, updateCurr: updateCurr };
