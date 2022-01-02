import { InputType, OmitType, PartialType, PickType } from "@nestjs/graphql";
import { User } from "./user.entity";

@InputType()
export class CreateUserInput extends OmitType(User, ["createdAt", "updatedAt"] as const) {}

@InputType()
export class UpdateUserInput extends PartialType(
   OmitType(User, ["createdAt", "updatedAt"] as const),
) {}

@InputType()
export class LoginInput extends PickType(User, <const>["email"]) {}
