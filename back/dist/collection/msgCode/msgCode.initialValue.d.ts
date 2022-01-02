export interface ErrorMsgInitialValueItem {
    code: string;
    msg: string;
    explanation: string;
    desc?: string;
}
export declare const msgCodeInitialValue: readonly [{
    readonly code: "0000";
    readonly msg: "{0}에 해당하는 코드가 없습니다.";
    readonly explanation: "요청한 코드가 없는 경우";
}, {
    readonly code: "0001";
    readonly msg: "{0}에 {1}이(가) 존재하지 않습니다.";
    readonly explanation: "update요청한 table에 id는 없는 경우";
}, {
    readonly code: "0002";
    readonly msg: "{0}에 {1}이(가) 존재하지 않습니다.";
    readonly explanation: "update요청한 table에 id는 없는 경우";
}];
export declare const _errorMsgInitialValue: ErrorMsgInitialValueItem[];
