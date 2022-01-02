import { Module } from "@nestjs/common";
import { AppConfig } from "./appConfig.entity";
import { AppConfigService } from "./appConfig.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppConfigResolver } from "./appConfig.resolver";

@Module({
   imports: [TypeOrmModule.forFeature([AppConfig])],
   controllers: [],
   providers: [AppConfigResolver, AppConfigService],
   exports: [AppConfigService],
})
export class AppConfigModule {}
