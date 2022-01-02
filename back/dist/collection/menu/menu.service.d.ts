import { Menu } from "./menu.entity";
import { EntityManager, Repository } from "typeorm";
import { CreateMenuInput, ListMenuInput } from "./menu.input";
export declare class MenuService {
    private menuRepository;
    private entityManager;
    constructor(menuRepository: Repository<Menu>, entityManager: EntityManager);
    selectTreeMenuFilterMenu(menuList: Menu[]): Promise<Menu[]>;
    create(payload: CreateMenuInput): Promise<CreateMenuInput & Menu>;
    createBulk(payload: CreateMenuInput[]): Promise<(CreateMenuInput & Menu)[]>;
    findOne(id: number, relations?: Array<"menu">): Promise<Menu>;
    findByIds(ids: number[], relations?: Array<"menu">): Promise<Menu[]>;
    find(filters?: ListMenuInput): Promise<Menu[]>;
}
