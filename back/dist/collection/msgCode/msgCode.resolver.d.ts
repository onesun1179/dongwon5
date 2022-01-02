import { MsgCodeService } from "./msgCode.service";
import { MsgCode } from "./msgCode.entity";
import { ListMsgCodeInput } from "./msgCode.input";
import { OnModuleInit } from "@nestjs/common";
export declare class MsgCodeResolver implements OnModuleInit {
    private errorMsgService;
    constructor(errorMsgService: MsgCodeService);
    onModuleInit(): Promise<void>;
    msgCode(code: string): Promise<MsgCode>;
    msgCodeList(filters: ListMsgCodeInput): Promise<MsgCode[]>;
}
