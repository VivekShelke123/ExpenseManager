"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var incomeDetailsSchema = new mongoose_1.default.Schema({
    userName: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    remark: { type: String },
});
exports.default = mongoose_1.default.model("incomeDetails", incomeDetailsSchema);
