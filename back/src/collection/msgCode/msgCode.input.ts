import { InputType, OmitType, PartialType } from "@nestjs/graphql";
import { MsgCode } from "./msgCode.entity";

@InputType()
export class CreateMsgCodeInput extends OmitType(MsgCode, ["createdAt", "updatedAt"] as const) {}

@InputType()
export class ListMsgCodeInput extends PartialType(MsgCode) {}

@InputType()
export class UpdateMsgCodeInput extends PartialType(
   OmitType(MsgCode, ["createdAt", "updatedAt"] as const),
) {}
