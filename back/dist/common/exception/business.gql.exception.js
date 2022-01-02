"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessGqlException = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
const dbErrorMsg_constant_1 = require("../constant/dbErrorMsg.constant");
class BusinessGqlException extends apollo_server_errors_1.ApolloError {
    constructor(code, ...arg) {
        const r = (0, dbErrorMsg_constant_1.makeErrorMsgConstant)(code, ...arg);
        super(r.msg, code, r);
        console.log(222);
        Object.defineProperty(this, "name", { value: "MyError" });
    }
}
exports.BusinessGqlException = BusinessGqlException;
//# sourceMappingURL=business.gql.exception.js.map