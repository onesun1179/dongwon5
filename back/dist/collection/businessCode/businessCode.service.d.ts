import { BusinessCode } from "./businessCode.entity";
import { CreateBusinessCodeInput, ListBusinessCodeInput } from "./businessCode.input";
import { Repository } from "typeorm";
export declare class BusinessCodeService {
    private businessCodeRepository;
    constructor(businessCodeRepository: Repository<BusinessCode>);
    codeMap: {
        [index: string]: BusinessCode;
    };
    renew(): Promise<void>;
    create(payload: CreateBusinessCodeInput): Promise<BusinessCode>;
    createBulk(payload: CreateBusinessCodeInput[]): Promise<(CreateBusinessCodeInput & BusinessCode)[]>;
    find(filters: ListBusinessCodeInput): Promise<BusinessCode[]>;
    findOne(code: string): Promise<BusinessCode>;
}
