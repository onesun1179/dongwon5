import { Auth } from "./auth.entity";
import { Repository } from "typeorm";
import { CreateAuthInput } from "./auth.input";
export declare class AuthService {
    private authRepository;
    constructor(authRepository: Repository<Auth>);
    create(auth: CreateAuthInput): Promise<CreateAuthInput & Auth>;
    createBulk(auths: CreateAuthInput[]): Promise<(CreateAuthInput & Auth)[]>;
}
