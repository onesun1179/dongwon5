"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAppConfigsModule = void 0;
const common_1 = require("@nestjs/common");
const userAppConfigs_service_1 = require("./userAppConfigs.service");
const userAppConfigs_entity_1 = require("./userAppConfigs.entity");
const typeorm_1 = require("@nestjs/typeorm");
const userAppConfigs_resolver_1 = require("./userAppConfigs.resolver");
const appConfig_entity_1 = require("../appConfig/appConfig.entity");
const user_entity_1 = require("../user/user.entity");
let UserAppConfigsModule = class UserAppConfigsModule {
};
UserAppConfigsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([userAppConfigs_entity_1.UserAppConfigs, appConfig_entity_1.AppConfig, user_entity_1.User])],
        controllers: [],
        providers: [userAppConfigs_resolver_1.UserAppConfigsResolver, userAppConfigs_service_1.UserAppConfigsService],
        exports: [userAppConfigs_service_1.UserAppConfigsService],
    })
], UserAppConfigsModule);
exports.UserAppConfigsModule = UserAppConfigsModule;
//# sourceMappingURL=userAppConfigs.module.js.map