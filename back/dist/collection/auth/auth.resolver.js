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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_entity_1 = require("./auth.entity");
const auth_service_1 = require("./auth.service");
const menu_service_1 = require("../menu/menu.service");
let AuthResolver = class AuthResolver {
    constructor(authService, menuService) {
        this.authService = authService;
        this.menuService = menuService;
    }
    async onModuleInit() {
        await this.authService.create({
            name: "developer",
            menus: await this.menuService.find(),
        });
    }
};
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => auth_entity_1.Auth),
    __metadata("design:paramtypes", [auth_service_1.AuthService, menu_service_1.MenuService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map