import _, { cloneDeep } from "lodash";
import { CustomScalar } from "@nestjs/graphql";
import { ValueNode } from "graphql";

const utilCommon = new (class {
   /**
    * @example
    *    - utilCommon.switchCase(1, [[0, 2], [1, 3]], 4) => 3
    *    - utilCommon.switchCase(0, [[0, 2], [1, 3]], 4) => 2
    *    - utilCommon.switchCase(3, [[0, 2], [1, 3]], 4) => 4
    *    - utilCommon.switchCase(3, [[0, 2], [1, 3]]) => null
    */
   switchCase<Value = any, Result = any, Default = any>(
      value: Value,
      arr: [Value, Result][] = [],
      _default?: Default,
   ): Result | Default | null {
      const a = _.find(arr, ([k]) => _.isEqual(k, value))?.[1];

      if (!_.isUndefined(a)) {
         return a;
      } else if (!_.isUndefined(_default)) {
         return _default;
      } else {
         return null;
      }
   }

   contains<T = string>(list: ReadonlyArray<T>, value: any): value is T {
      return list.some((item) => item === value);
   }

   makeStringUnionScalar<T extends string>(unionGroup: readonly T[], description = "") {
      return class Validator implements CustomScalar<T, T> {
         description = description;

         parseValue(value: T): T {
            console.log("parseValue", value);
            return value;
         }

         serialize(value: T): T {
            console.log("serialize", value);
            return value; // value sent to the client
         }

         parseLiteral(ast: ValueNode): T {
            // if (ast.kind === "Validate") {
            //    return string;
            // }
            return null;
         }
      };
   }

   parseTree<T>(
      array: T[],
      keyFieldName = "id",
      parentKeyFieldName = "parentId",
      childrenFieldName = "children",
   ) {
      const _array = cloneDeep(array);
      _array
         .filter((o) => o[childrenFieldName].length > 0)
         .forEach((o) => {
            o[childrenFieldName] = _array.filter(
               (oo) => oo[parentKeyFieldName] === o[keyFieldName],
            );
         });
      return _array;
   }
})();

export default utilCommon;
