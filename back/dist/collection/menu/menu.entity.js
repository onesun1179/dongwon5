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
var Menu_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const primary_model_1 = require("../../common/entity/primary/primary.model");
let Menu = Menu_1 = class Menu extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: "메뉴 아이디",
    }),
    __metadata("design:type", Number)
], Menu.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "메뉴 명",
    }),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Menu_1], {
        nullable: true,
    }),
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], Menu.prototype, "children", void 0);
__decorate([
    (0, graphql_1.Field)(() => Menu_1, {
        nullable: true,
    }),
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", Menu)
], Menu.prototype, "parentMenu", void 0);
Menu = Menu_1 = __decorate([
    (0, graphql_1.InputType)("MenuInput", { isAbstract: true }),
    (0, graphql_1.ObjectType)("MenuObject"),
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)("closure-table")
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.entity.js.map