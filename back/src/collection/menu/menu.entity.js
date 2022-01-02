"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const primary_model_1 = require("../../common/entity/primary/primary.model");
let Menu = class Menu extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => Number, {
        description: "tb_menu.id",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Menu.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        description: "tb_menu.name",
    }),
    (0, typeorm_1.Column)({
        unique: true,
    })
], Menu.prototype, "name", void 0);
Menu = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({
        name: "tb_menu",
    })
], Menu);
exports.Menu = Menu;
