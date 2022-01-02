import { PrimaryModel } from "../../common/entity/primary/primary.model";
export declare class Menu extends PrimaryModel {
    id: number;
    name: string;
    children?: Menu[];
    parentMenu?: Menu;
}
