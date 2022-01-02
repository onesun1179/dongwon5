
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
    profileObj: ProfileObjInput;
    tokenObj: TokenObjInput;
}

export interface MenuInput {
    children?: Nullable<MenuInput[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    parentMenu?: Nullable<MenuInput>;
    title: string;
    updatedAt: DateTime;
}

export interface ProfileObjInput {
    email: EmailAddress;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
}

export interface TokenObjInput {
    access_token: string;
    expires_at: number;
    expires_in: number;
    first_issued_at: number;
    id_token: string;
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
    createdAt: DateTime;
    desc?: Nullable<string>;
    email: EmailAddress;
    menus?: Nullable<MenuInput[]>;
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

export interface BusinessCodeObject {
    children?: Nullable<BusinessCodeObject[]>;
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCodeObject>;
    updatedAt: DateTime;
}

export interface LoginObj {
    profileObj: ProfileObj;
    tokenObj: TokenObj;
    user: UserObject;
}

export interface MenuObject {
    children?: Nullable<MenuObject[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    parentMenu?: Nullable<MenuObject>;
    title: string;
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
    login(loginInput: LoginInput): LoginObj | Promise<LoginObj>;
}

export interface ProfileObj {
    email: EmailAddress;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
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

export interface TokenObj {
    access_token: string;
    expires_at: number;
    expires_in: number;
    first_issued_at: number;
    id_token: string;
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
    createdAt: DateTime;
    desc?: Nullable<string>;
    email: EmailAddress;
    menus?: Nullable<MenuObject[]>;
    name: string;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsObject[]>;
}

export type AppConfigTypeScalar = "percent"|"px"|"";
export type DateTime = Date;
export type EmailAddress = string;
export type ValidatorScalar = Array<"string"|"number">;
type Nullable<T> = T | null;
