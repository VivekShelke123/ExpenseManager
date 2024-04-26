"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = 5000;
app_1.default.listen(port, function () {
    console.log("Server on Port ".concat(port, " Started Successfully"));
});
