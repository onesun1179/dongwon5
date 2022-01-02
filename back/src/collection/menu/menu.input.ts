import { InputType, OmitType } from "@nestjs/graphql";
import { Menu } from "./menu.entity";

@InputType()
export class CreateMenuInput extends OmitType(Menu, ["id", "updatedAt", "createdAt"] as const) {}

@InputType()
export class ListMenuInput extends Menu {}

@InputType()
export class UpdateMenuInput extends OmitType(Menu, ["id", "updatedAt", "createdAt"] as const) {}
