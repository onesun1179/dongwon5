import { InputType, OmitType } from "@nestjs/graphql";
import { AppConfig } from "./appConfig.entity";

@InputType()
export class CreateAppConfigInput extends OmitType(AppConfig, [
   "createdAt",
   "updatedAt",
] as const) {}

@InputType()
export class ListAppConfigInput extends AppConfig {}

@InputType()
export class UpdateAppConfigInput extends OmitType(AppConfig, [
   "createdAt",
   "updatedAt",
] as const) {}
