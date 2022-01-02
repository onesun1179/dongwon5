import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "./auth.entity";
import { Repository } from "typeorm";
import { CreateAuthInput } from "./auth.input";

@Injectable()
export class AuthService {
   constructor(@InjectRepository(Auth) private authRepository: Repository<Auth>) {}

   async create(auth: CreateAuthInput) {
      return await this.authRepository.save(auth);
   }

   async createBulk(auths: CreateAuthInput[]) {
      return await this.authRepository.save(auths);
   }
}
