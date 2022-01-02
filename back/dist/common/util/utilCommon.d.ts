import { ValueNode } from "graphql";
declare const utilCommon: {
    switchCase<Value = any, Result = any, Default = any>(value: Value, arr?: [Value, Result][], _default?: Default): Result | Default;
    contains<T = string>(list: readonly T[], value: any): value is T;
    makeStringUnionScalar<T_1 extends string>(unionGroup: readonly T_1[], description?: string): {
        new (): {
            description: string;
            parseValue(value: T_1): T_1;
            serialize(value: T_1): T_1;
            parseLiteral(ast: ValueNode): T_1;
        };
    };
    parseTree<T_2>(array: T_2[], keyFieldName?: string, parentKeyFieldName?: string, childrenFieldName?: string): T_2[];
};
export default utilCommon;
