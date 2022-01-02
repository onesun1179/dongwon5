import { OnModuleInit } from "@nestjs/common";
import { MenuService } from "./menu.service";
export declare class MenuResolver implements OnModuleInit {
    private menuService;
    constructor(menuService: MenuService);
    onModuleInit(): Promise<void>;
}
