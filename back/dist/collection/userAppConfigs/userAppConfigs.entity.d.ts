import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { User } from "../user/user.entity";
import { AppConfig } from "../appConfig/appConfig.entity";
export declare class UserAppConfigs extends PrimaryModel {
    appConfig: AppConfig;
    user: User;
    value: string;
}
