import { ApolloError } from "apollo-server-errors";
import { dbErrorMsg } from "../constant/dbErrorMsg.constant";
export declare class BusinessGqlException<T extends keyof typeof dbErrorMsg> extends ApolloError {
    constructor(code: T, ...arg: Parameters<typeof dbErrorMsg[T]>);
}
