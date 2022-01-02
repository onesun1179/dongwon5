"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const primary_model_1 = require("../../common/entity/primary/primary.model");
const appConfig_entity_1 = require("../appConfig/appConfig.entity");
const browser_1 = require("typeorm/browser");
// import { JoinTable } from "typeorm/browser";
let User = class User extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => Number, {
        description: "tb_user.id",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)()
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: "tb_user.name",
    }),
    (0, typeorm_1.Column)()
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: "tb_user.email",
    }),
    (0, typeorm_1.Column)({
        unique: true,
    })
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => appConfig_entity_1.AppConfig),
    (0, browser_1.JoinTable)()
], User.prototype, "appConfigs", void 0);
User = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({
        name: "tb_user",
    })
], User);
exports.User = User;
