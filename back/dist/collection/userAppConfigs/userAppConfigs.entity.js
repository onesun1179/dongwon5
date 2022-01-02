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
exports.UserAppConfigs = void 0;
const primary_model_1 = require("../../common/entity/primary/primary.model");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const appConfig_entity_1 = require("../appConfig/appConfig.entity");
let UserAppConfigs = class UserAppConfigs extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => appConfig_entity_1.AppConfig),
    (0, typeorm_1.ManyToOne)(() => appConfig_entity_1.AppConfig, (appConfig) => appConfig.userAppConfigs, {
        primary: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: "name",
    }),
    __metadata("design:type", appConfig_entity_1.AppConfig)
], UserAppConfigs.prototype, "appConfig", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userAppConfigs, {
        primary: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: "email",
    }),
    __metadata("design:type", user_entity_1.User)
], UserAppConfigs.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        nullable: true,
        comment: "설정 값",
    }),
    __metadata("design:type", String)
], UserAppConfigs.prototype, "value", void 0);
UserAppConfigs = __decorate([
    (0, graphql_1.InputType)("UserAppConfigsInput", { isAbstract: true }),
    (0, graphql_1.ObjectType)("UserAppConfigsObject"),
    (0, typeorm_1.Entity)()
], UserAppConfigs);
exports.UserAppConfigs = UserAppConfigs;
//# sourceMappingURL=userAppConfigs.entity.js.map