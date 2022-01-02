import { UserService } from "./user.service";
import { User } from "./user.entity";
import { OnModuleInit } from "@nestjs/common";
import { MenuService } from "../menu/menu.service";
import { Repository } from "typeorm";
import { Menu } from "../menu/menu.entity";
import { Auth } from "../auth/auth.entity";
import { LoginInput } from "./user.input";
import { LoginObject } from "./user.object";
export declare class UserResolver implements OnModuleInit {
    private userService;
    private menuService;
    private userRepository;
    private menuRepository;
    private authRepository;
    constructor(userService: UserService, menuService: MenuService, userRepository: Repository<User>, menuRepository: Repository<Menu>, authRepository: Repository<Auth>);
    onModuleInit(): Promise<void>;
    login(loginInput: LoginInput): Promise<LoginObject>;
}
