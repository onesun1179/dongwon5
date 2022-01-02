"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigTypeScalar = exports.AppConfigTypeGroup = exports.ValidatorScalar = exports.ValidatorGroup = exports.makeGroupParseUnionType = void 0;
const graphql_1 = require("@nestjs/graphql");
const utilCommon_1 = require("../util/utilCommon");
const makeGroupParseUnionType = (arr, arrayYn = false) => `${arrayYn
    ? `Array<${arr.map((o) => `"${o}"`).join("|")}>`
    : `${arr.map((o) => `"${o}"`).join("|")}`}`;
exports.makeGroupParseUnionType = makeGroupParseUnionType;
exports.ValidatorGroup = ["percent", "px", ""];
let ValidatorScalar = class ValidatorScalar extends utilCommon_1.default.makeStringUnionScalar(exports.ValidatorGroup) {
};
ValidatorScalar = __decorate([
    (0, graphql_1.Scalar)("ValidatorScalar")
], ValidatorScalar);
exports.ValidatorScalar = ValidatorScalar;
exports.AppConfigTypeGroup = ["string", "number"];
let AppConfigTypeScalar = class AppConfigTypeScalar extends utilCommon_1.default.makeStringUnionScalar(exports.AppConfigTypeGroup) {
};
AppConfigTypeScalar = __decorate([
    (0, graphql_1.Scalar)("AppConfigTypeScalar")
], AppConfigTypeScalar);
exports.AppConfigTypeScalar = AppConfigTypeScalar;
//# sourceMappingURL=stringUnionTypes.js.map