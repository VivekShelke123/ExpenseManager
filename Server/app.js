"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require("body-parser");
var LoginRoutes_1 = require("./routes/LoginRoutes");
var ExpenseRoutes_1 = require("./routes/ExpenseRoutes");
var IncomeRoutes_1 = require("./routes/IncomeRoutes");
var mongoose_1 = require("mongoose");
var cors = require('cors');
var app = express();
app.use(cors());
mongoose_1.default.connect('mongodb://localhost:27017/ExpenseManagerDatabase')
    .then(function () {
    console.log('connected succesfully');
})
    .catch(function (err) {
    console.log("error occured:" + err);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(LoginRoutes_1.default);
app.use(ExpenseRoutes_1.default);
app.use(IncomeRoutes_1.default);
exports.default = app;
