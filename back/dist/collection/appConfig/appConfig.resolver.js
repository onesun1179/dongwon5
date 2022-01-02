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
exports.AppConfigResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const appConfig_service_1 = require("./appConfig.service");
const appConfig_entity_1 = require("./appConfig.entity");
const common_1 = require("@nestjs/common");
const appConfig_initialValue_1 = require("./appConfig.initialValue");
const appConfig_input_1 = require("./appConfig.input");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppConfigResolver = class AppConfigResolver {
    constructor(appConfigService, appConfigRepository) {
        this.appConfigService = appConfigService;
        this.appConfigRepository = appConfigRepository;
    }
    async onModuleInit() {
        await this.appConfigRepository.save(appConfig_initialValue_1.appConfigInitialValue);
    }
    async createAppConfig(payload) {
        await this.appConfigRepository.save(payload);
    }
    async appConfig(name) {
        return await this.appConfigRepository.findOne(name);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => appConfig_entity_1.AppConfig),
    __param(0, (0, graphql_1.Args)("payload")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appConfig_input_1.CreateAppConfigInput]),
    __metadata("design:returntype", Promise)
], AppConfigResolver.prototype, "createAppConfig", null);
__decorate([
    (0, graphql_1.Query)(() => appConfig_entity_1.AppConfig),
    __param(0, (0, graphql_1.Args)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppConfigResolver.prototype, "appConfig", null);
AppConfigResolver = __decorate([
    (0, graphql_1.Resolver)(() => appConfig_entity_1.AppConfig),
    __param(0, (0, common_1.Inject)(appConfig_service_1.AppConfigService)),
    __param(1, (0, typeorm_1.InjectRepository)(appConfig_entity_1.AppConfig)),
    __metadata("design:paramtypes", [appConfig_service_1.AppConfigService,
        typeorm_2.Repository])
], AppConfigResolver);
exports.AppConfigResolver = AppConfigResolver;
//# sourceMappingURL=appConfig.resolver.js.map