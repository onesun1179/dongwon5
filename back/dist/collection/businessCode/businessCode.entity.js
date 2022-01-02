"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BusinessCode_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCode = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const primary_model_1 = require("../../common/entity/primary/primary.model");
let BusinessCode = BusinessCode_1 = class BusinessCode extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryColumn)({
        unique: true,
        comment: "비즈니스 코드 명",
    }),
    __metadata("design:type", String)
], BusinessCode.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "비즈니스 코드 원말",
    }),
    __metadata("design:type", String)
], BusinessCode.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BusinessCode_1], {
        nullable: true,
    }),
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], BusinessCode.prototype, "children", void 0);
__decorate([
    (0, graphql_1.Field)(() => BusinessCode_1, {
        nullable: true,
    }),
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", BusinessCode)
], BusinessCode.prototype, "parentCode", void 0);
BusinessCode = BusinessCode_1 = __decorate([
    (0, graphql_1.InputType)("BusinessCodeInput", { isAbstract: true }),
    (0, graphql_1.ObjectType)("BusinessCodeObject"),
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)("closure-table")
], BusinessCode);
exports.BusinessCode = BusinessCode;
//# sourceMappingURL=businessCode.entity.js.map