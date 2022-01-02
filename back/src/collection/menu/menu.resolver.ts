import { Resolver } from "@nestjs/graphql";
import { Menu } from "./menu.entity";
import { OnModuleInit } from "@nestjs/common";
import { MenuService } from "./menu.service";

@Resolver(() => Menu)
export class MenuResolver implements OnModuleInit {
   constructor(private menuService: MenuService) {}

   async onModuleInit(): Promise<void> {
      const a = await this.menuService.create({
         name: "관리",
      });
      const [b, c] = await this.menuService.createBulk([
         {
            name: "메뉴관리",
            parentMenu: a,
         },
         {
            name: "설정관리",
            parentMenu: a,
         },
      ]);

      await this.menuService.create({
         name: "메뉴 조회",
         parentMenu: b,
      });
   }
}
