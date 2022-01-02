import { UserAppConfigs } from "./userAppConfigs.entity";
import { Repository } from "typeorm";
export declare class UserAppConfigsService {
    private userAppConfigsRepository;
    constructor(userAppConfigsRepository: Repository<UserAppConfigs>);
}
