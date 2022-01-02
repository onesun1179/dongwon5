"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeErrorMsgConstant = exports.dbErrorMsg = void 0;
exports.dbErrorMsg = {
    D000: (tableName, id) => ({
        desc: "update요청한 table에 id는 없는 경우",
        msg: `${tableName}에 ${id}이(가) 존재하지 않습니다.`,
    }),
    D001: (tableName, id) => ({
        desc: "insert요청한 table에 id가 중복되는 경우",
        msg: `${tableName}의 ${id}가 중복되었습니다.`,
    }),
};
const makeErrorMsgConstant = (code, ...arg) => exports.dbErrorMsg[code].apply(null, arg);
exports.makeErrorMsgConstant = makeErrorMsgConstant;
//# sourceMappingURL=dbErrorMsg.constant.js.map