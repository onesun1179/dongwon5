export declare class AppConfigInput {
    createdAt: DateTime;
    desc?: Nullable<string>;
    initialValue: string;
    name: string;
    type: AppConfigTypeScalar;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsInput[]>;
    validate: ValidatorScalar[];
}
export declare class BusinessCodeInput {
    children?: Nullable<BusinessCodeInput[]>;
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCodeInput>;
    updatedAt: DateTime;
}
export declare class CreateAppConfigInput {
    desc?: Nullable<string>;
    initialValue: string;
    name: string;
    type: AppConfigTypeScalar;
    userAppConfigs?: Nullable<UserAppConfigsInput[]>;
    validate: ValidatorScalar[];
}
export declare class CreateBusinessCodeInput {
    children?: Nullable<BusinessCodeInput[]>;
    code: string;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCodeInput>;
}
export declare class ListBusinessCodeInput {
    children?: Nullable<BusinessCodeInput[]>;
    code?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    desc?: Nullable<string>;
    fullName?: Nullable<string>;
    parentCode?: Nullable<BusinessCodeInput>;
    updatedAt?: Nullable<DateTime>;
}
export declare class ListMsgCodeInput {
    code?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    desc?: Nullable<string>;
    explanation?: Nullable<string>;
    msg?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}
export declare class LoginInput {
    profileObj: ProfileObjInput;
    tokenObj: TokenObjInput;
}
export declare class MenuInput {
    children?: Nullable<MenuInput[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    parentMenu?: Nullable<MenuInput>;
    title: string;
    updatedAt: DateTime;
}
export declare class ProfileObjInput {
    email: EmailAddress;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
}
export declare class TokenObjInput {
    access_token: string;
    expires_at: number;
    expires_in: number;
    first_issued_at: number;
    id_token: string;
}
export declare class UserAppConfigsInput {
    appConfig: AppConfigInput;
    createdAt: DateTime;
    desc?: Nullable<string>;
    updatedAt: DateTime;
    user: UserInput;
    value: string;
}
export declare class UserInput {
    createdAt: DateTime;
    desc?: Nullable<string>;
    email: EmailAddress;
    menus?: Nullable<MenuInput[]>;
    name: string;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigsInput[]>;
}
export declare class AppConfig {
    createdAt: DateTime;
    desc?: Nullable<string>;
    initialValue: string;
    name: string;
    type: AppConfigTypeScalar;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigs[]>;
    validate: ValidatorScalar[];
}
export declare class BusinessCode {
    children?: Nullable<BusinessCode[]>;
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    fullName: string;
    parentCode?: Nullable<BusinessCode>;
    updatedAt: DateTime;
}
export declare class LoginObj {
    profileObj: ProfileObj;
    tokenObj: TokenObj;
    user: User;
}
export declare class Menu {
    children?: Nullable<Menu[]>;
    createdAt: DateTime;
    desc?: Nullable<string>;
    id: number;
    parentMenu?: Nullable<Menu>;
    title: string;
    updatedAt: DateTime;
}
export declare class MsgCode {
    code: string;
    createdAt: DateTime;
    desc?: Nullable<string>;
    explanation: string;
    msg: string;
    updatedAt: DateTime;
}
export declare abstract class IMutation {
    abstract createAppConfig(payload: CreateAppConfigInput): AppConfig | Promise<AppConfig>;
    abstract createBusinessCode(payload: CreateBusinessCodeInput): BusinessCode | Promise<BusinessCode>;
    abstract login(loginInput: LoginInput): LoginObj | Promise<LoginObj>;
}
export declare class ProfileObj {
    email: EmailAddress;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
}
export declare abstract class IQuery {
    abstract appConfig(name: string): AppConfig | Promise<AppConfig>;
    abstract businessCode(code: string): Nullable<BusinessCode> | Promise<Nullable<BusinessCode>>;
    abstract businessCodeList(filters: ListBusinessCodeInput): Nullable<BusinessCode[]> | Promise<Nullable<BusinessCode[]>>;
    abstract find(): UserAppConfigs | Promise<UserAppConfigs>;
    abstract login(email: string, password: string): Result | Promise<Result>;
    abstract msgCode(code: string): Nullable<MsgCode> | Promise<Nullable<MsgCode>>;
    abstract msgCodeList(filters: ListMsgCodeInput): MsgCode[] | Promise<MsgCode[]>;
    abstract sayHello(): string | Promise<string>;
}
export declare class Result {
    result: boolean;
}
export declare class TokenObj {
    access_token: string;
    expires_at: number;
    expires_in: number;
    first_issued_at: number;
    id_token: string;
}
export declare class User {
    createdAt: DateTime;
    desc?: Nullable<string>;
    email: EmailAddress;
    menus?: Nullable<Menu[]>;
    name: string;
    updatedAt: DateTime;
    userAppConfigs?: Nullable<UserAppConfigs[]>;
}
export declare class UserAppConfigs {
    appConfig: AppConfig;
    createdAt: DateTime;
    desc?: Nullable<string>;
    updatedAt: DateTime;
    user: User;
    value: string;
}
export declare type AppConfigTypeScalar = "percent" | "px" | "";
export declare type DateTime = Date;
export declare type EmailAddress = string;
export declare type ValidatorScalar = Array<"string" | "number">;
declare type Nullable<T> = T | null;
export {};
