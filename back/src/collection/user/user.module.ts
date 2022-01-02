import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuModule } from "../menu/menu.module";
import { Menu } from "../menu/menu.entity";
import { UserResolver } from "./user.resolver";
import { Auth } from "../auth/auth.entity";

@Module({
   imports: [TypeOrmModule.forFeature([User, Menu, Auth]), MenuModule],
   controllers: [],
   providers: [UserResolver, UserService],
   exports: [UserService],
})
export class UserModule {}
