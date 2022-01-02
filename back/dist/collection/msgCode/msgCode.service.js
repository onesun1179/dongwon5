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
exports.MsgCodeService = void 0;
const common_1 = require("@nestjs/common");
const msgCode_entity_1 = require("./msgCode.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lodash_1 = require("lodash");
let MsgCodeService = class MsgCodeService {
    constructor(msgCodeRepository) {
        this.msgCodeRepository = msgCodeRepository;
        this.errorMsgMap = {};
    }
    getMsg(errorCode, ...arg) {
        const msg = this.errorMsgMap[errorCode];
        if (msg) {
            return msg.replace(/\{([0-9]+)\}/g, (a, b) => arg[b]);
        }
        else {
            return this.getMsg("E0000", errorCode);
        }
    }
    async create(payload) {
        return await this.msgCodeRepository.save(payload);
    }
    async createBulk(payload) {
        return await this.msgCodeRepository.save(payload);
    }
    async findOne(code) {
        return await this.msgCodeRepository.findOne(code);
    }
    async find(filters) {
        return await this.msgCodeRepository.find({ ...filters });
    }
    async renew() {
        this.errorMsgMap = (0, lodash_1.reduce)(await this.msgCodeRepository.find(), (r, o) => (0, lodash_1.set)(r, `${o.code}`, o.msg), {});
    }
};
MsgCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(msgCode_entity_1.MsgCode)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MsgCodeService);
exports.MsgCodeService = MsgCodeService;
//# sourceMappingURL=msgCode.service.js.map