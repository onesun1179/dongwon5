import { Menu } from "./menu.entity";
declare const CreateMenuInput_base: import("@nestjs/common").Type<Omit<Menu, "id" | "createdAt" | "updatedAt">>;
export declare class CreateMenuInput extends CreateMenuInput_base {
}
export declare class ListMenuInput extends Menu {
}
declare const UpdateMenuInput_base: import("@nestjs/common").Type<Omit<Menu, "id" | "createdAt" | "updatedAt">>;
export declare class UpdateMenuInput extends UpdateMenuInput_base {
}
export {};
