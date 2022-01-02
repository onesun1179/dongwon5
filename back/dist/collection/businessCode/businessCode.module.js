"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCodeModule = void 0;
const common_1 = require("@nestjs/common");
const businessCode_service_1 = require("./businessCode.service");
const businessCode_entity_1 = require("./businessCode.entity");
const typeorm_1 = require("@nestjs/typeorm");
const businessCode_resolver_1 = require("./businessCode.resolver");
let BusinessCodeModule = class BusinessCodeModule {
};
BusinessCodeModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([businessCode_entity_1.BusinessCode])],
        controllers: [],
        providers: [businessCode_resolver_1.BusinessCodeResolver, businessCode_service_1.BusinessCodeService],
        exports: [businessCode_service_1.BusinessCodeService],
    })
], BusinessCodeModule);
exports.BusinessCodeModule = BusinessCodeModule;
//# sourceMappingURL=businessCode.module.js.map