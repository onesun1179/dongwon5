import { BusinessCode } from "./businessCode.entity";
declare const CreateBusinessCodeInput_base: import("@nestjs/common").Type<Omit<BusinessCode, "createdAt" | "updatedAt">>;
export declare class CreateBusinessCodeInput extends CreateBusinessCodeInput_base {
}
declare const ListBusinessCodeInput_base: import("@nestjs/common").Type<Partial<BusinessCode>>;
export declare class ListBusinessCodeInput extends ListBusinessCodeInput_base {
}
declare const UpdateBusinessCodeInput_base: import("@nestjs/common").Type<Partial<Omit<BusinessCode, "code" | "createdAt" | "updatedAt">>>;
export declare class UpdateBusinessCodeInput extends UpdateBusinessCodeInput_base {
}
export {};
