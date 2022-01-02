export declare const dbErrorMsg: {
    readonly D000: (tableName: string, id: string | number) => {
        desc: string;
        msg: string;
    };
    readonly D001: (tableName: string, id: string | number) => {
        desc: string;
        msg: string;
    };
};
export declare const makeErrorMsgConstant: <T extends "D000" | "D001">(code: T, ...arg: Parameters<{
    readonly D000: (tableName: string, id: string | number) => {
        desc: string;
        msg: string;
    };
    readonly D001: (tableName: string, id: string | number) => {
        desc: string;
        msg: string;
    };
}[T]>) => {
    desc: string;
    msg: string;
};
