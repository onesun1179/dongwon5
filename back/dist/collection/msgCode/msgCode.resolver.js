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
exports.MsgCodeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const msgCode_service_1 = require("./msgCode.service");
const msgCode_entity_1 = require("./msgCode.entity");
const msgCode_input_1 = require("./msgCode.input");
const msgCode_initialValue_1 = require("./msgCode.initialValue");
let MsgCodeResolver = class MsgCodeResolver {
    constructor(errorMsgService) {
        this.errorMsgService = errorMsgService;
    }
    async onModuleInit() {
        await this.errorMsgService.createBulk(msgCode_initialValue_1._errorMsgInitialValue);
        await this.errorMsgService.renew();
    }
    async msgCode(code) {
        return this.errorMsgService.findOne(code);
    }
    async msgCodeList(filters) {
        return this.errorMsgService.find(filters);
    }
};
__decorate([
    (0, graphql_1.Query)(() => msgCode_entity_1.MsgCode, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MsgCodeResolver.prototype, "msgCode", null);
__decorate([
    (0, graphql_1.Query)(() => [msgCode_entity_1.MsgCode]),
    __param(0, (0, graphql_1.Args)("filters")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [msgCode_input_1.ListMsgCodeInput]),
    __metadata("design:returntype", Promise)
], MsgCodeResolver.prototype, "msgCodeList", null);
MsgCodeResolver = __decorate([
    (0, graphql_1.Resolver)(() => msgCode_entity_1.MsgCode),
    __metadata("design:paramtypes", [msgCode_service_1.MsgCodeService])
], MsgCodeResolver);
exports.MsgCodeResolver = MsgCodeResolver;
//# sourceMappingURL=msgCode.resolver.js.map