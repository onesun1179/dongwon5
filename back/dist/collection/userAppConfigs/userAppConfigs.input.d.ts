import { UserAppConfigs } from "./userAppConfigs.entity";
declare const CreateUserAppConfigsInput_base: import("@nestjs/common").Type<Omit<UserAppConfigs, "createdAt" | "updatedAt">>;
export declare class CreateUserAppConfigsInput extends CreateUserAppConfigsInput_base {
}
declare const ListUserAppConfigsInput_base: import("@nestjs/common").Type<Partial<UserAppConfigs>>;
export declare class ListUserAppConfigsInput extends ListUserAppConfigsInput_base {
}
declare const UpdateUserAppConfigsInput_base: import("@nestjs/common").Type<Partial<Omit<UserAppConfigs, "createdAt" | "updatedAt">>>;
export declare class UpdateUserAppConfigsInput extends UpdateUserAppConfigsInput_base {
}
export {};
