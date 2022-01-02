import { MsgCode } from "./msgCode.entity";
declare const CreateMsgCodeInput_base: import("@nestjs/common").Type<Omit<MsgCode, "createdAt" | "updatedAt">>;
export declare class CreateMsgCodeInput extends CreateMsgCodeInput_base {
}
declare const ListMsgCodeInput_base: import("@nestjs/common").Type<Partial<MsgCode>>;
export declare class ListMsgCodeInput extends ListMsgCodeInput_base {
}
declare const UpdateMsgCodeInput_base: import("@nestjs/common").Type<Partial<Omit<MsgCode, "createdAt" | "updatedAt">>>;
export declare class UpdateMsgCodeInput extends UpdateMsgCodeInput_base {
}
export {};
