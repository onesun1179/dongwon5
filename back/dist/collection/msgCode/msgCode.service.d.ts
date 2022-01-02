import { MsgCode } from "./msgCode.entity";
import { CreateMsgCodeInput, ListMsgCodeInput } from "./msgCode.input";
import { Repository } from "typeorm";
export declare class MsgCodeService {
    private msgCodeRepository;
    errorMsgMap: {
        [index: string]: string;
    };
    constructor(msgCodeRepository: Repository<MsgCode>);
    getMsg(errorCode: string, ...arg: any[]): string;
    create(payload: CreateMsgCodeInput): Promise<CreateMsgCodeInput & MsgCode>;
    createBulk(payload: CreateMsgCodeInput[]): Promise<(CreateMsgCodeInput & MsgCode)[]>;
    findOne(code: string): Promise<MsgCode>;
    find(filters: ListMsgCodeInput): Promise<MsgCode[]>;
    renew(): Promise<void>;
}
