import { AppConfig } from "./appConfig.entity";
declare const CreateAppConfigInput_base: import("@nestjs/common").Type<Omit<AppConfig, "createdAt" | "updatedAt">>;
export declare class CreateAppConfigInput extends CreateAppConfigInput_base {
}
export declare class ListAppConfigInput extends AppConfig {
}
declare const UpdateAppConfigInput_base: import("@nestjs/common").Type<Omit<AppConfig, "createdAt" | "updatedAt">>;
export declare class UpdateAppConfigInput extends UpdateAppConfigInput_base {
}
export {};
