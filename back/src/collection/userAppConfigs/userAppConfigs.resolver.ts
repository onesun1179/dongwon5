import { Query, Resolver } from "@nestjs/graphql";
import { UserAppConfigsService } from "./userAppConfigs.service";
import { UserAppConfigs } from "./userAppConfigs.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OnModuleInit } from "@nestjs/common";
import { AppConfig } from "../appConfig/appConfig.entity";
import { User } from "../user/user.entity";

@Resolver(() => UserAppConfigs)
export class UserAppConfigsResolver implements OnModuleInit {
   constructor(
      private userAppConfigsService: UserAppConfigsService,
      @InjectRepository(UserAppConfigs)
      private userAppConfigsRepository: Repository<UserAppConfigs>,
      @InjectRepository(AppConfig)
      private appConfigRepository: Repository<AppConfig>,
      @InjectRepository(User)
      private userRepository: Repository<User>,
   ) {}

   async onModuleInit(): Promise<void> {
      const users = await this.userRepository.find();
      const appConfigs = await this.appConfigRepository.find();

      await this.userAppConfigsRepository.save(
         users.reduce((r, o) => {
            r = [
               ...r,
               ...appConfigs.map((oo) => ({
                  appConfig: oo,
                  user: o,
                  value: oo.initialValue,
               })),
            ];
            return r;
         }, []),
      );
   }

   @Query(() => UserAppConfigs)
   async find() {
      return await this.userAppConfigsRepository.find();
   }
}
