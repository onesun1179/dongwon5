
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

/* back project graphql types */

export interface AppConfigInput {
    createdAt: DateTime;
    desc?: Nullable<string>;
    initialValue: string;
    name: string;
    type: AppConfigTypeScalar;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsInput[]>;
    validate: ValidatorScalar[];
}

export interface AuthInput {
    children?: Nullable<AuthInput[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    menus: MenuInput[];
    name: string;
    parentAuth?: Nullable<AuthInput>;
    updatedAt: DateTime;
    users?: Nullable<UserInput[]>;
}

export interface BusinessCodeInput {
    children?: Nullable<BusinessCodeInput[]>;
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCodeInput>;
    updatedAt: DateTime;
}

export interface CreateAppConfigInput {
    desc?: Nullable<string>;
    initialValue: string;
    name: string;
    type: AppConfigTypeScalar;
    userAppConfigs?: Nullable<UserAppConfigsInput[]>;
    validate: ValidatorScalar[];
}

export interface CreateBusinessCodeInput {
    children?: Nullable<BusinessCodeInput[]>;
    code: string;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCodeInput>;
}

export interface ListBusinessCodeInput {
    children?: Nullable<BusinessCodeInput[]>;
    code?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    desc?: Nullable<string>;
    fullName?: Nullable<string>;
    parentCode?: Nullable<BusinessCodeInput>;
    updatedAt?: Nullable<DateTime>;
}

export interface ListMsgCodeInput {
    code?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    desc?: Nullable<string>;
    explanation?: Nullable<string>;
    msg?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export interface LoginInput {
    email: EmailAddress;
}

export interface MenuInput {
    children?: Nullable<MenuInput[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    name: string;
    parentMenu?: Nullable<MenuInput>;
    updatedAt: DateTime;
}

export interface UserAppConfigsInput {
    appConfig: AppConfigInput;
    createdAt: DateTime;
    desc?: Nullable<string>;
    updatedAt: DateTime;
    user: UserInput;
    value: string;
}

export interface UserInput {
    auth: AuthInput;
    createdAt: DateTime;
    desc?: Nullable<string>;
    email: EmailAddress;
    name: string;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsInput[]>;
}

export interface AppConfigObject {
    createdAt: DateTime;
    desc?: Nullable<string>;
    initialValue: string;
    name: string;
    type: AppConfigTypeScalar;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsObject[]>;
    validate: ValidatorScalar[];
}

export interface AuthObject {
    children?: Nullable<AuthObject[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    menus: MenuObject[];
    name: string;
    parentAuth?: Nullable<AuthObject>;
    updatedAt: DateTime;
    users?: Nullable<UserObject[]>;
}

export interface BusinessCodeObject {
    children?: Nullable<BusinessCodeObject[]>;
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCodeObject>;
    updatedAt: DateTime;
}

export interface LoginObject {
    user: UserObject;
}

export interface MenuObject {
    children?: Nullable<MenuObject[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    name: string;
    parentMenu?: Nullable<MenuObject>;
    updatedAt: DateTime;
}

export interface MsgCodeObject {
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    explanation: string;
    msg: string;
    updatedAt: DateTime;
}

export interface IMutation {
    createAppConfig(payload: CreateAppConfigInput): AppConfigObject | Promise<AppConfigObject>;
    createBusinessCode(payload: CreateBusinessCodeInput): BusinessCodeObject | Promise<BusinessCodeObject>;
    login(loginInput: LoginInput): LoginObject | Promise<LoginObject>;
}

export interface IQuery {
    appConfig(name: string): AppConfigObject | Promise<AppConfigObject>;
    businessCode(code: string): Nullable<BusinessCodeObject> | Promise<Nullable<BusinessCodeObject>>;
    businessCodeList(filters: ListBusinessCodeInput): Nullable<BusinessCodeObject[]> | Promise<Nullable<BusinessCodeObject[]>>;
    find(): UserAppConfigsObject | Promise<UserAppConfigsObject>;
    login(email: string, password: string): Result | Promise<Result>;
    msgCode(code: string): Nullable<MsgCodeObject> | Promise<Nullable<MsgCodeObject>>;
    msgCodeList(filters: ListMsgCodeInput): MsgCodeObject[] | Promise<MsgCodeObject[]>;
    sayHello(): string | Promise<string>;
}

export interface Result {
    result: boolean;
}

export interface UserAppConfigsObject {
    appConfig: AppConfigObject;
    createdAt: DateTime;
    desc?: Nullable<string>;
    updatedAt: DateTime;
    user: UserObject;
    value: string;
}

export interface UserObject {
    auth: AuthObject;
    createdAt: DateTime;
    desc?: Nullable<string>;
    email: EmailAddress;
    name: string;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsObject[]>;
}

export type AppConfigTypeScalar = "percent"|"px"|"";
export type DateTime = Date;
export type EmailAddress = string;
export type ValidatorScalar = Array<"string"|"number">;
type Nullable<T> = T | null;
