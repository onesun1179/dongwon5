import { InputType, OmitType, PartialType } from "@nestjs/graphql";
import { BusinessCode } from "./businessCode.entity";

@InputType()
export class CreateBusinessCodeInput extends OmitType(BusinessCode, [
   "createdAt",
   "updatedAt",
] as const) {}

@InputType()
export class ListBusinessCodeInput extends PartialType(BusinessCode) {}

@InputType()
export class UpdateBusinessCodeInput extends PartialType(
   OmitType(BusinessCode, ["code", "createdAt", "updatedAt"] as const),
) {}
