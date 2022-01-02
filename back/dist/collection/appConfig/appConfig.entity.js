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
exports.AppConfig = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const primary_model_1 = require("../../common/entity/primary/primary.model");
const userAppConfigs_entity_1 = require("../userAppConfigs/userAppConfigs.entity");
const stringUnionTypes_1 = require("../../common/scalar/stringUnionTypes");
let AppConfig = class AppConfig extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryColumn)({
        unique: true,
        comment: "설정 명",
    }),
    __metadata("design:type", String)
], AppConfig.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "설정 초깃값",
    }),
    __metadata("design:type", String)
], AppConfig.prototype, "initialValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => stringUnionTypes_1.AppConfigTypeScalar),
    (0, typeorm_1.Column)({
        type: "enum",
        enum: stringUnionTypes_1.AppConfigTypeGroup,
        default: "string",
        comment: "설정 값 타입",
    }),
    __metadata("design:type", Object)
], AppConfig.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => [stringUnionTypes_1.ValidatorScalar]),
    (0, typeorm_1.Column)({
        type: "set",
        enum: stringUnionTypes_1.ValidatorGroup,
        default: [],
        comment: "설정 유효검사타입 그룹",
    }),
    __metadata("design:type", Array)
], AppConfig.prototype, "validate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [userAppConfigs_entity_1.UserAppConfigs], {
        nullable: true,
    }),
    (0, typeorm_1.OneToMany)(() => userAppConfigs_entity_1.UserAppConfigs, (userAppConfig) => userAppConfig.appConfig),
    __metadata("design:type", Array)
], AppConfig.prototype, "userAppConfigs", void 0);
AppConfig = __decorate([
    (0, graphql_1.InputType)("AppConfigInput", { isAbstract: true }),
    (0, graphql_1.ObjectType)("AppConfigObject"),
    (0, typeorm_1.Entity)()
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=appConfig.entity.js.map