"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const common_1 = require("@nestjs/common");
const appConfig_entity_1 = require("./appConfig.entity");
const appConfig_service_1 = require("./appConfig.service");
const typeorm_1 = require("@nestjs/typeorm");
const appConfig_resolver_1 = require("./appConfig.resolver");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([appConfig_entity_1.AppConfig])],
        controllers: [],
        providers: [appConfig_resolver_1.AppConfigResolver, appConfig_service_1.AppConfigService],
        exports: [appConfig_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;
//# sourceMappingURL=appConfig.module.js.map