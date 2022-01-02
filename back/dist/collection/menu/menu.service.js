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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const menu_entity_1 = require("./menu.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MenuService = class MenuService {
    constructor(menuRepository, entityManager) {
        this.menuRepository = menuRepository;
        this.entityManager = entityManager;
    }
    async selectTreeMenuFilterMenu(menuList) {
        const ids = menuList.map((o) => o.id);
        const menuTree = await this.entityManager.getTreeRepository(menu_entity_1.Menu).findTrees();
        function loop(menu) {
            if (menu.children.length > 0) {
                menu.children = menu.children.filter((o) => ids.includes(o.id));
                menu.children.length > 0 &&
                    menu.children.forEach((o) => {
                        loop(o);
                    });
            }
        }
        menuTree.forEach((o) => loop(o));
        return menuTree;
    }
    async create(payload) {
        return await this.menuRepository.save(payload);
    }
    async createBulk(payload) {
        return await this.menuRepository.save(payload);
    }
    async findOne(id, relations = []) {
        return await this.menuRepository.findOne(id, {
            relations,
        });
    }
    async findByIds(ids, relations = []) {
        return await this.menuRepository.findByIds(ids, {
            relations,
        });
    }
    async find(filters) {
        console.log(2122);
        console.log(await this.menuRepository.find({ ...filters }));
        return await this.menuRepository.find({ ...filters });
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __param(1, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map