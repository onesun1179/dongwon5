import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserInput } from "./user.input";

@Injectable()
export class UserService {
   constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

   async create(payload: CreateUserInput) {
      return await this.userRepository.save(payload);
   }

   async createBulk(payload: CreateUserInput[]) {
      return await this.userRepository.save(payload);
   }

   async findAll() {
      return await this.userRepository.find();
   }
}
