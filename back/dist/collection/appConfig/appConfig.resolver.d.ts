import { AppConfigService } from "./appConfig.service";
import { AppConfig } from "./appConfig.entity";
import { OnModuleInit } from "@nestjs/common";
import { CreateAppConfigInput } from "./appConfig.input";
import { Repository } from "typeorm";
export declare class AppConfigResolver implements OnModuleInit {
    private appConfigService;
    private appConfigRepository;
    constructor(appConfigService: AppConfigService, appConfigRepository: Repository<AppConfig>);
    onModuleInit(): Promise<void>;
    createAppConfig(payload: CreateAppConfigInput): Promise<void>;
    appConfig(name: string): Promise<AppConfig>;
}
