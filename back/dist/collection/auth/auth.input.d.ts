import { Auth } from "./auth.entity";
declare const CreateAuthInput_base: import("@nestjs/common").Type<Omit<Auth, "id" | "createdAt" | "updatedAt">>;
export declare class CreateAuthInput extends CreateAuthInput_base {
}
declare const ListAuthInput_base: import("@nestjs/common").Type<Partial<Auth>>;
export declare class ListAuthInput extends ListAuthInput_base {
}
declare const UpdateAuthInput_base: import("@nestjs/common").Type<Partial<Omit<Auth, "id" | "createdAt" | "updatedAt">>>;
export declare class UpdateAuthInput extends UpdateAuthInput_base {
}
export {};
