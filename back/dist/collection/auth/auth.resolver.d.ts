import { OnModuleInit } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MenuService } from "../menu/menu.service";
export declare class AuthResolver implements OnModuleInit {
    private authService;
    private menuService;
    constructor(authService: AuthService, menuService: MenuService);
    onModuleInit(): Promise<void>;
}
