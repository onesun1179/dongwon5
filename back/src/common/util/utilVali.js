"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilCommon_1 = require("./utilCommon");
const lodash_1 = require("lodash");
const utilVali = (validateStr) => utilCommon_1.default.switchCase(validateStr, [
    [
        "percent",
        (value) => lodash_1.default.isNumber(Number(value.replace(/(.+)%/, (a, b) => b))),
    ],
    ["px", (value) => lodash_1.default.isNumber(Number(value.replace(/(.+)px/, (a, b) => b)))],
]);
exports.default = utilVali;
