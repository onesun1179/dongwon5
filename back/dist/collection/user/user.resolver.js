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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
const menu_service_1 = require("../menu/menu.service");
const typeorm_1 = require("typeorm");
const menu_entity_1 = require("../menu/menu.entity");
const typeorm_2 = require("@nestjs/typeorm");
const auth_entity_1 = require("../auth/auth.entity");
const user_input_1 = require("./user.input");
const user_object_1 = require("./user.object");
let UserResolver = class UserResolver {
    constructor(userService, menuService, userRepository, menuRepository, authRepository) {
        this.userService = userService;
        this.menuService = menuService;
        this.userRepository = userRepository;
        this.menuRepository = menuRepository;
        this.authRepository = authRepository;
    }
    async onModuleInit() {
        await this.userRepository.save({
            email: "onesun1179@gmail.com",
            name: "이동원",
            auth: await this.authRepository.findOne({
                name: "developer",
            }),
        });
    }
    async login(loginInput) {
        console.log(loginInput);
        const user = await this.userRepository.findOne(loginInput.email, {
            relations: ["auth", "userAppConfigs", "userAppConfigs.appConfig", "auth.menus"],
        });
        user.auth.menus = await this.menuService.selectTreeMenuFilterMenu(user.auth.menus);
        console.log(user);
        return {
            user,
        };
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_object_1.LoginObject),
    __param(0, (0, graphql_1.Args)("loginInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_2.InjectRepository)(menu_entity_1.Menu)),
    __param(4, (0, typeorm_2.InjectRepository)(auth_entity_1.Auth)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        menu_service_1.MenuService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map