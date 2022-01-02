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
exports.PrimaryModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let PrimaryModel = class PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, typeorm_1.Column)({
        nullable: true,
        comment: "비고",
    }),
    __metadata("design:type", String)
], PrimaryModel.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", insert: false, update: false, comment: "생성시간" }),
    __metadata("design:type", Date)
], PrimaryModel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", insert: false, update: false, comment: "수정시간" }),
    __metadata("design:type", Date)
], PrimaryModel.prototype, "updatedAt", void 0);
PrimaryModel = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)({}),
    (0, typeorm_1.Entity)()
], PrimaryModel);
exports.PrimaryModel = PrimaryModel;
//# sourceMappingURL=primary.model.js.map