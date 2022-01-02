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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const primary_model_1 = require("../../common/entity/primary/primary.model");
const graphql_scalars_1 = require("graphql-scalars");
const class_validator_1 = require("class-validator");
const userAppConfigs_entity_1 = require("../userAppConfigs/userAppConfigs.entity");
const auth_entity_1 = require("../auth/auth.entity");
let User = class User extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.EmailAddressResolver),
    (0, typeorm_1.PrimaryColumn)({
        unique: true,
        comment: "사용자 이메일",
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "사용자 명",
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => auth_entity_1.Auth),
    (0, typeorm_1.ManyToOne)(() => auth_entity_1.Auth, (auth) => auth.users),
    __metadata("design:type", auth_entity_1.Auth)
], User.prototype, "auth", void 0);
__decorate([
    (0, graphql_1.Field)(() => [userAppConfigs_entity_1.UserAppConfigs], {
        nullable: true,
    }),
    (0, typeorm_1.OneToMany)(() => userAppConfigs_entity_1.UserAppConfigs, (userAppConfig) => userAppConfig.user),
    __metadata("design:type", Array)
], User.prototype, "userAppConfigs", void 0);
User = __decorate([
    (0, graphql_1.InputType)("UserInput", { isAbstract: true }),
    (0, graphql_1.ObjectType)("UserObject"),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map