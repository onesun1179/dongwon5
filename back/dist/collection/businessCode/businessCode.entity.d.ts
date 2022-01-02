import { PrimaryModel } from "../../common/entity/primary/primary.model";
export declare class BusinessCode extends PrimaryModel {
    code: string;
    fullName: string;
    children?: BusinessCode[];
    parentCode?: BusinessCode;
}
