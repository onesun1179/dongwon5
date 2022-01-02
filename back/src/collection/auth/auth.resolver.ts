import { Resolver } from "@nestjs/graphql";
import { Auth } from "./auth.entity";
import { OnModuleInit } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MenuService } from "../menu/menu.service";

@Resolver(() => Auth)
export class AuthResolver implements OnModuleInit {
   constructor(private authService: AuthService, private menuService: MenuService) {}

   async onModuleInit(): Promise<void> {
      await this.authService.create({
         name: "developer",
         menus: await this.menuService.find(),
      });
   }
}
