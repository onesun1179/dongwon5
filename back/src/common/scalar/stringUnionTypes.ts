import { Scalar } from "@nestjs/graphql";
import utilCommon from "../util/utilCommon";

export const makeGroupParseUnionType = (arr: readonly string[], arrayYn = false) =>
   `${
      arrayYn
         ? `Array<${arr.map((o) => `"${o}"`).join("|")}>`
         : `${arr.map((o) => `"${o}"`).join("|")}`
   }`;

export const ValidatorGroup = ["percent", "px", ""] as const;

@Scalar("ValidatorScalar")
export class ValidatorScalar extends utilCommon.makeStringUnionScalar(ValidatorGroup) {}

export const AppConfigTypeGroup = ["string", "number"] as const;

@Scalar("AppConfigTypeScalar")
export class AppConfigTypeScalar extends utilCommon.makeStringUnionScalar(AppConfigTypeGroup) {}
