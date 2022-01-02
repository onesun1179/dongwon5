import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserInput } from "./user.input";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(payload: CreateUserInput): Promise<CreateUserInput & User>;
    createBulk(payload: CreateUserInput[]): Promise<(CreateUserInput & User)[]>;
    findAll(): Promise<User[]>;
}
