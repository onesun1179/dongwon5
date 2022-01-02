export declare const makeGroupParseUnionType: (arr: readonly string[], arrayYn?: boolean) => string;
export declare const ValidatorGroup: readonly ["percent", "px", ""];
declare const ValidatorScalar_base: {
    new (): {
        description: string;
        parseValue(value: "" | "percent" | "px"): "" | "percent" | "px";
        serialize(value: "" | "percent" | "px"): "" | "percent" | "px";
        parseLiteral(ast: import("graphql").ValueNode): "" | "percent" | "px";
    };
};
export declare class ValidatorScalar extends ValidatorScalar_base {
}
export declare const AppConfigTypeGroup: readonly ["string", "number"];
declare const AppConfigTypeScalar_base: {
    new (): {
        description: string;
        parseValue(value: "string" | "number"): "string" | "number";
        serialize(value: "string" | "number"): "string" | "number";
        parseLiteral(ast: import("graphql").ValueNode): "string" | "number";
    };
};
export declare class AppConfigTypeScalar extends AppConfigTypeScalar_base {
}
export {};
