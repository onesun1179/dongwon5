import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AppConfigService } from "./appConfig.service";
import { AppConfig } from "./appConfig.entity";
import { Inject, OnModuleInit } from "@nestjs/common";
import { appConfigInitialValue } from "./appConfig.initialValue";
import { CreateAppConfigInput } from "./appConfig.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Resolver(() => AppConfig)
export class AppConfigResolver implements OnModuleInit {
   constructor(
      @Inject(AppConfigService) private appConfigService: AppConfigService,
      @InjectRepository(AppConfig) private appConfigRepository: Repository<AppConfig>,
   ) {}

   async onModuleInit(): Promise<void> {
      await this.appConfigRepository.save(appConfigInitialValue);
   }

   @Mutation(() => AppConfig)
   async createAppConfig(@Args("payload") payload: CreateAppConfigInput) {
      await this.appConfigRepository.save(payload);
   }

   @Query(() => AppConfig)
   async appConfig(@Args("name") name: string) {
      return await this.appConfigRepository.findOne(name);
   }
}
