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
var Auth_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const primary_model_1 = require("../../common/entity/primary/primary.model");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const menu_entity_1 = require("../menu/menu.entity");
let Auth = Auth_1 = class Auth extends primary_model_1.PrimaryModel {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: "권한 아이디",
    }),
    __metadata("design:type", Number)
], Auth.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        comment: "권한 명",
    }),
    __metadata("design:type", String)
], Auth.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Auth_1], {
        nullable: true,
    }),
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], Auth.prototype, "children", void 0);
__decorate([
    (0, graphql_1.Field)(() => Auth_1, {
        nullable: true,
    }),
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", Auth)
], Auth.prototype, "parentAuth", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User], {
        nullable: true,
    }),
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.auth),
    __metadata("design:type", Array)
], Auth.prototype, "users", void 0);
__decorate([
    (0, graphql_1.Field)(() => [menu_entity_1.Menu]),
    (0, typeorm_1.ManyToMany)(() => menu_entity_1.Menu),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Auth.prototype, "menus", void 0);
Auth = Auth_1 = __decorate([
    (0, graphql_1.InputType)("AuthInput", { isAbstract: true }),
    (0, graphql_1.ObjectType)("AuthObject"),
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)("closure-table")
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=auth.entity.js.map