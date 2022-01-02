import { InputType, OmitType, PartialType } from "@nestjs/graphql";
import { UserAppConfigs } from "./userAppConfigs.entity";

@InputType()
export class CreateUserAppConfigsInput extends OmitType(UserAppConfigs, [
   "createdAt",
   "updatedAt",
] as const) {}

@InputType()
export class ListUserAppConfigsInput extends PartialType(UserAppConfigs) {}

@InputType()
export class UpdateUserAppConfigsInput extends PartialType(
   OmitType(UserAppConfigs, ["createdAt", "updatedAt"] as const),
) {}
