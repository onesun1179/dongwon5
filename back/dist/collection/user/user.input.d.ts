import { User } from "./user.entity";
declare const CreateUserInput_base: import("@nestjs/common").Type<Omit<User, "createdAt" | "updatedAt">>;
export declare class CreateUserInput extends CreateUserInput_base {
}
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<Omit<User, "createdAt" | "updatedAt">>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
}
declare const LoginInput_base: import("@nestjs/common").Type<Pick<User, "email">>;
export declare class LoginInput extends LoginInput_base {
}
export {};
