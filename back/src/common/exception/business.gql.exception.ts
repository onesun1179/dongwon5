import { ApolloError } from "apollo-server-errors";
import { dbErrorMsg, makeErrorMsgConstant } from "../constant/dbErrorMsg.constant";

export class BusinessGqlException<T extends keyof typeof dbErrorMsg> extends ApolloError {
   constructor(code: T, ...arg: Parameters<typeof dbErrorMsg[T]>) {
      const r = makeErrorMsgConstant(code, ...arg);
      super(r.msg, code, r);

      console.log(222);
      Object.defineProperty(this, "name", { value: "MyError" });
   }
}
