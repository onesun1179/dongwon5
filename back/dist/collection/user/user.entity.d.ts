import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { UserAppConfigs } from "../userAppConfigs/userAppConfigs.entity";
import { Auth } from "../auth/auth.entity";
export declare class User extends PrimaryModel {
    email: string;
    name: string;
    auth: Auth;
    userAppConfigs?: UserAppConfigs[];
}
