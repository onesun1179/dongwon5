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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCode = void 0;
const primary_model_1 = require("../../common/entity/primary/primary.model");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let MsgCode = class MsgCode extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryColumn)({
        unique: true,
    }),
    __metadata("design:type", String)
], MsgCode.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "메시지",
    }),
    __metadata("design:type", String)
], MsgCode.prototype, "msg", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "설명",
    }),
    __metadata("design:type", String)
], MsgCode.prototype, "explanation", void 0);
MsgCode = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)("MsgCodeObject"),
    (0, typeorm_1.Entity)()
], MsgCode);
exports.MsgCode = MsgCode;
//# sourceMappingURL=msgCode.entity.js.map