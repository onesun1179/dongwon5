import utilCommon from "./utilCommon";
import _ from "lodash";
import { ValidatorGroup } from "../scalar/stringUnionTypes";

const utilVali = (validateStr: typeof ValidatorGroup[number]) =>
   utilCommon.switchCase<typeof validateStr>(validateStr, [
      [
         "percent",
         (value: string): boolean => _.isNumber(Number(value.replace(/(.+)%/, (a, b) => b))),
      ],
      ["px", (value: string): boolean => _.isNumber(Number(value.replace(/(.+)px/, (a, b) => b)))],
   ]);

export default utilVali;
