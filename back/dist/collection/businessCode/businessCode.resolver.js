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
exports.BusinessCodeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const businessCode_service_1 = require("./businessCode.service");
const businessCode_entity_1 = require("./businessCode.entity");
const businessCode_input_1 = require("./businessCode.input");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BusinessCodeResolver = class BusinessCodeResolver {
    constructor(businessCodeService, businessCodeRepository) {
        this.businessCodeService = businessCodeService;
        this.businessCodeRepository = businessCodeRepository;
    }
    async onModuleInit() {
        const a = await this.businessCodeRepository.save({
            code: "E",
            fullName: "Error",
        });
        await this.businessCodeRepository.save([
            {
                code: "BE",
                fullName: "Business Error",
                parentCode: a,
            },
            {
                code: "DE",
                fullName: "Database Error",
                parentCode: a,
            },
        ]);
        await this.businessCodeService.renew();
    }
    async businessCode(code) {
        return this.businessCodeService.findOne(code);
    }
    async businessCodeList(filters) {
        return this.businessCodeService.find(filters);
    }
    async createBusinessCode(payload) {
        return await this.businessCodeService.create(payload);
    }
};
__decorate([
    (0, graphql_1.Query)(() => businessCode_entity_1.BusinessCode, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessCodeResolver.prototype, "businessCode", null);
__decorate([
    (0, graphql_1.Query)(() => [businessCode_entity_1.BusinessCode], {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)("filters")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [businessCode_input_1.ListBusinessCodeInput]),
    __metadata("design:returntype", Promise)
], BusinessCodeResolver.prototype, "businessCodeList", null);
__decorate([
    (0, graphql_1.Mutation)(() => businessCode_entity_1.BusinessCode),
    __param(0, (0, graphql_1.Args)("payload")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [businessCode_input_1.CreateBusinessCodeInput]),
    __metadata("design:returntype", Promise)
], BusinessCodeResolver.prototype, "createBusinessCode", null);
BusinessCodeResolver = __decorate([
    (0, graphql_1.Resolver)(() => businessCode_entity_1.BusinessCode),
    __param(1, (0, typeorm_1.InjectRepository)(businessCode_entity_1.BusinessCode)),
    __metadata("design:paramtypes", [businessCode_service_1.BusinessCodeService,
        typeorm_2.Repository])
], BusinessCodeResolver);
exports.BusinessCodeResolver = BusinessCodeResolver;
//# sourceMappingURL=businessCode.resolver.js.map