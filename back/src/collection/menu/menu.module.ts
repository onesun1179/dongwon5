import { Module } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { Menu } from "./menu.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuResolver } from "./menu.resolver";

@Module({
   imports: [TypeOrmModule.forFeature([Menu])],
   controllers: [],
   providers: [MenuResolver, MenuService],
   exports: [MenuService],
})
export class MenuModule {}
