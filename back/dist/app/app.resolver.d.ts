export declare class AppResolver {
    sayHello(): string;
    login(email: string, password: string): Promise<{
        result: boolean;
    }>;
}
