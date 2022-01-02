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
exports.UserAppConfigsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const userAppConfigs_service_1 = require("./userAppConfigs.service");
const userAppConfigs_entity_1 = require("./userAppConfigs.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appConfig_entity_1 = require("../appConfig/appConfig.entity");
const user_entity_1 = require("../user/user.entity");
let UserAppConfigsResolver = class UserAppConfigsResolver {
    constructor(userAppConfigsService, userAppConfigsRepository, appConfigRepository, userRepository) {
        this.userAppConfigsService = userAppConfigsService;
        this.userAppConfigsRepository = userAppConfigsRepository;
        this.appConfigRepository = appConfigRepository;
        this.userRepository = userRepository;
    }
    async onModuleInit() {
        const users = await this.userRepository.find();
        const appConfigs = await this.appConfigRepository.find();
        await this.userAppConfigsRepository.save(users.reduce((r, o) => {
            r = [
                ...r,
                ...appConfigs.map((oo) => ({
                    appConfig: oo,
                    user: o,
                    value: oo.initialValue,
                })),
            ];
            return r;
        }, []));
    }
    async find() {
        return await this.userAppConfigsRepository.find();
    }
};
__decorate([
    (0, graphql_1.Query)(() => userAppConfigs_entity_1.UserAppConfigs),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAppConfigsResolver.prototype, "find", null);
UserAppConfigsResolver = __decorate([
    (0, graphql_1.Resolver)(() => userAppConfigs_entity_1.UserAppConfigs),
    __param(1, (0, typeorm_1.InjectRepository)(userAppConfigs_entity_1.UserAppConfigs)),
    __param(2, (0, typeorm_1.InjectRepository)(appConfig_entity_1.AppConfig)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [userAppConfigs_service_1.UserAppConfigsService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserAppConfigsResolver);
exports.UserAppConfigsResolver = UserAppConfigsResolver;
//# sourceMappingURL=userAppConfigs.resolver.js.map