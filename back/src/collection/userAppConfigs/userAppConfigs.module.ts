import { Module } from "@nestjs/common";
import { UserAppConfigsService } from "./userAppConfigs.service";
import { UserAppConfigs } from "./userAppConfigs.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAppConfigsResolver } from "./userAppConfigs.resolver";
import { AppConfig } from "../appConfig/appConfig.entity";
import { User } from "../user/user.entity";

@Module({
   imports: [TypeOrmModule.forFeature([UserAppConfigs, AppConfig, User])],
   controllers: [],
   providers: [UserAppConfigsResolver, UserAppConfigsService],
   exports: [UserAppConfigsService],
})
export class UserAppConfigsModule {}
