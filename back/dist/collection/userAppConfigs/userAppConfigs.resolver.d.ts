import { UserAppConfigsService } from "./userAppConfigs.service";
import { UserAppConfigs } from "./userAppConfigs.entity";
import { Repository } from "typeorm";
import { OnModuleInit } from "@nestjs/common";
import { AppConfig } from "../appConfig/appConfig.entity";
import { User } from "../user/user.entity";
export declare class UserAppConfigsResolver implements OnModuleInit {
    private userAppConfigsService;
    private userAppConfigsRepository;
    private appConfigRepository;
    private userRepository;
    constructor(userAppConfigsService: UserAppConfigsService, userAppConfigsRepository: Repository<UserAppConfigs>, appConfigRepository: Repository<AppConfig>, userRepository: Repository<User>);
    onModuleInit(): Promise<void>;
    find(): Promise<UserAppConfigs[]>;
}
