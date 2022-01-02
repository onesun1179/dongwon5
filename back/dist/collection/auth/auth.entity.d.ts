import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { User } from "../user/user.entity";
import { Menu } from "../menu/menu.entity";
export declare class Auth extends PrimaryModel {
    id: number;
    name: string;
    children?: Auth[];
    parentAuth?: Auth;
    users?: User[];
    menus: Menu[];
}
