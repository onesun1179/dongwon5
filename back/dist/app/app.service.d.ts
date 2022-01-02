import { OnModuleInit } from "@nestjs/common";
export declare class AppService implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    getHello(): string;
}
