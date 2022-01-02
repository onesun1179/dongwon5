import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { OnModuleInit } from "@nestjs/common";
import { MenuService } from "../menu/menu.service";
import { Repository } from "typeorm";
import { Menu } from "../menu/menu.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "../auth/auth.entity";
import { LoginInput } from "./user.input";
import { LoginObject } from "./user.object";

@Resolver(() => User)
export class UserResolver implements OnModuleInit {
   constructor(
      private userService: UserService,
      private menuService: MenuService,
      @InjectRepository(User) private userRepository: Repository<User>,
      @InjectRepository(Menu) private menuRepository: Repository<Menu>,
      @InjectRepository(Auth) private authRepository: Repository<Auth>,
   ) {}

   async onModuleInit(): Promise<void> {
      await this.userRepository.save({
         email: "onesun1179@gmail.com",
         name: "이동원",
         auth: await this.authRepository.findOne({
            name: "developer",
         }),
      });
   }

   @Mutation(() => LoginObject)
   async login(@Args("loginInput") loginInput: LoginInput): Promise<LoginObject> {
      console.log(loginInput);
      const user = await this.userRepository.findOne(loginInput.email, {
         relations: ["auth", "userAppConfigs", "userAppConfigs.appConfig", "auth.menus"],
      });
      user.auth.menus = await this.menuService.selectTreeMenuFilterMenu(user.auth.menus);
      console.log(user);

      return {
         user,
      };
   }
}
