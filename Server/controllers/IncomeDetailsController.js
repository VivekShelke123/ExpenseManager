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
var IncomeDetails_1 = require("../models/IncomeDetails");
var axios_1 = require("axios");
var mongoose_1 = require("mongoose");
var addIncomeDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, time, date, month, year, category, amount, remark, incomeData, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userName = _a.userName, time = _a.time, date = _a.date, month = _a.month, year = _a.year, category = _a.category, amount = _a.amount, remark = _a.remark;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                incomeData = new IncomeDetails_1.default({ userName: userName, time: time, date: date, month: month, year: year, category: category, amount: amount, remark: remark });
                return [4 /*yield*/, incomeData.save()];
            case 2:
                data = _b.sent();
                res.status(200).send({ data: data });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getIncomeDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userName, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userName = req.params.userName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, IncomeDetails_1.default.find({ userName: userName })];
            case 2:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).send({ mssg: 'error found' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateAmount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userName, _a, newCurry, prevCurry, findData, _i, findData_1, element, newFindData, options, resp, err_1, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userName = req.params.userName;
                _a = req.body, newCurry = _a.newCurry, prevCurry = _a.prevCurry;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 13, , 14]);
                return [4 /*yield*/, IncomeDetails_1.default.find({ userName: userName })];
            case 2:
                findData = _b.sent();
                if (!(findData.length !== 0)) return [3 /*break*/, 11];
                _i = 0, findData_1 = findData;
                _b.label = 3;
            case 3:
                if (!(_i < findData_1.length)) return [3 /*break*/, 10];
                element = findData_1[_i];
                return [4 /*yield*/, IncomeDetails_1.default.findOne({ _id: element._id })];
            case 4:
                newFindData = _b.sent();
                if (!newFindData) return [3 /*break*/, 9];
                _b.label = 5;
            case 5:
                _b.trys.push([5, 8, , 9]);
                options = {
                    params: {
                        from: prevCurry,
                        to: newCurry,
                        amount: element.amount,
                    },
                    headers: {
                        'X-RapidAPI-Key': '1d8a585459msh19474c5442c7e6bp15032bjsnabb327e99802',
                        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
                    }
                };
                return [4 /*yield*/, axios_1.default.get('https://currency-converter-pro1.p.rapidapi.com/convert', options)];
            case 6:
                resp = _b.sent();
                newFindData.amount = resp.data.result;
                return [4 /*yield*/, newFindData.save()];
            case 7:
                _b.sent();
                return [3 /*break*/, 9];
            case 8:
                err_1 = _b.sent();
                console.error(err_1);
                return [3 /*break*/, 9];
            case 9:
                _i++;
                return [3 /*break*/, 3];
            case 10:
                res.status(200).send({ mssg: 'Data updated successfully' });
                return [3 /*break*/, 12];
            case 11:
                res.status(404).send({ mssg: 'User not found' });
                _b.label = 12;
            case 12: return [3 /*break*/, 14];
            case 13:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ mssg: 'Error occurred' });
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
var deleteEntry = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, objectId, findData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params._id;
                objectId = mongoose_1.default.Types.ObjectId.createFromHexString(id.trim());
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, IncomeDetails_1.default.findByIdAndDelete(objectId)];
            case 2:
                findData = _a.sent();
                if (findData) {
                    res.status(200).json({ message: 'Item deleted successfully' });
                }
                else {
                    res.status(404).json({ message: 'Item not found' });
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ mssg: 'Error occurred' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = { addIncomeDetail: addIncomeDetail, getIncomeDetails: getIncomeDetails, updateAmount: updateAmount, deleteEntry: deleteEntry };
