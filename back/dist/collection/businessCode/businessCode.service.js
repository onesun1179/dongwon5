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
exports.BusinessCodeService = void 0;
const common_1 = require("@nestjs/common");
const businessCode_entity_1 = require("./businessCode.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lodash_1 = require("lodash");
let BusinessCodeService = class BusinessCodeService {
    constructor(businessCodeRepository) {
        this.businessCodeRepository = businessCodeRepository;
        this.codeMap = {};
    }
    async renew() {
        this.codeMap = (0, lodash_1.reduce)(await this.businessCodeRepository.find(), (r, o) => (0, lodash_1.set)(r, o.code, o.fullName), {});
    }
    async create(payload) {
        const r = await this.businessCodeRepository.create(payload);
        await this.renew();
        return r;
    }
    async createBulk(payload) {
        const r = await this.businessCodeRepository.save(payload);
        await this.renew();
        return r;
    }
    async find(filters) {
        return await this.businessCodeRepository.find({ ...filters });
    }
    async findOne(code) {
        return await this.businessCodeRepository.findOne(code);
    }
};
BusinessCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(businessCode_entity_1.BusinessCode)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusinessCodeService);
exports.BusinessCodeService = BusinessCodeService;
//# sourceMappingURL=businessCode.service.js.map