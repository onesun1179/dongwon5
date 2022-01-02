"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCodeModule = void 0;
const common_1 = require("@nestjs/common");
const msgCode_service_1 = require("./msgCode.service");
const msgCode_entity_1 = require("./msgCode.entity");
const typeorm_1 = require("@nestjs/typeorm");
const msgCode_resolver_1 = require("./msgCode.resolver");
let MsgCodeModule = class MsgCodeModule {
};
MsgCodeModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([msgCode_entity_1.MsgCode])],
        controllers: [],
        providers: [msgCode_resolver_1.MsgCodeResolver, msgCode_service_1.MsgCodeService],
        exports: [msgCode_service_1.MsgCodeService],
    })
], MsgCodeModule);
exports.MsgCodeModule = MsgCodeModule;
//# sourceMappingURL=msgCode.module.js.map