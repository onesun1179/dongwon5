import { Injectable } from "@nestjs/common";
import { Menu } from "./menu.entity";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { CreateMenuInput, ListMenuInput } from "./menu.input";
import { ListMsgCodeInput } from "../msgCode/msgCode.input";

@Injectable()
export class MenuService {
   constructor(
      @InjectRepository(Menu) private menuRepository: Repository<Menu>,
      @InjectEntityManager() private entityManager: EntityManager,
   ) {}

   /**
    * parameter에 해당하면 menu filtering
    * @param menuList
    */
   async selectTreeMenuFilterMenu(menuList: Menu[]) {
      const ids = menuList.map((o) => o.id);
      const menuTree = await this.entityManager.getTreeRepository(Menu).findTrees();

      function loop(menu: Menu) {
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

   /**
    * 메뉴 생성
    * @param payload
    */
   async create(payload: CreateMenuInput) {
      return await this.menuRepository.save(payload);
   }

   /**
    * 메뉴 bulk 생성
    * @param payload
    */
   async createBulk(payload: CreateMenuInput[]) {
      return await this.menuRepository.save(payload);
   }

   async findOne(id: number, relations: Array<"menu"> = []) {
      return await this.menuRepository.findOne(id, {
         relations,
      });
   }

   async findByIds(ids: number[], relations: Array<"menu"> = []) {
      return await this.menuRepository.findByIds(ids, {
         relations,
      });
   }

   async find(filters?: ListMenuInput) {
      console.log(2122);
      console.log(await this.menuRepository.find({ ...filters }));
      return await this.menuRepository.find({ ...filters });
   }
}
