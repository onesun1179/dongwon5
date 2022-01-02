import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { UserAppConfigs } from "../userAppConfigs/userAppConfigs.entity";
import { AppConfigTypeGroup, ValidatorGroup } from "../../common/scalar/stringUnionTypes";
export declare class AppConfig extends PrimaryModel {
    name: string;
    initialValue: string;
    type?: typeof AppConfigTypeGroup[number];
    validate?: typeof ValidatorGroup[number][];
    userAppConfigs?: UserAppConfigs[];
}
