import { InputType, OmitType, PartialType } from "@nestjs/graphql";
import { Auth } from "./auth.entity";

@InputType()
export class CreateAuthInput extends OmitType(Auth, ["id", "createdAt", "updatedAt"] as const) {}

@InputType()
export class ListAuthInput extends PartialType(Auth) {}

@InputType()
export class UpdateAuthInput extends PartialType(
   OmitType(Auth, ["id", "createdAt", "updatedAt"] as const),
) {}
