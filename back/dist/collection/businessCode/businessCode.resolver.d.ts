import { BusinessCodeService } from "./businessCode.service";
import { BusinessCode } from "./businessCode.entity";
import { CreateBusinessCodeInput, ListBusinessCodeInput } from "./businessCode.input";
import { OnModuleInit } from "@nestjs/common";
import { Repository } from "typeorm";
export declare class BusinessCodeResolver implements OnModuleInit {
    private businessCodeService;
    private businessCodeRepository;
    constructor(businessCodeService: BusinessCodeService, businessCodeRepository: Repository<BusinessCode>);
    onModuleInit(): Promise<void>;
    businessCode(code: string): Promise<BusinessCode>;
    businessCodeList(filters: ListBusinessCodeInput): Promise<BusinessCode[]>;
    createBusinessCode(payload: CreateBusinessCodeInput): Promise<BusinessCode>;
}
