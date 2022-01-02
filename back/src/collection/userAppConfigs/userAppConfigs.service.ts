import { Injectable } from "@nestjs/common";
import { UserAppConfigs } from "./userAppConfigs.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserAppConfigsService {
   constructor(
      @InjectRepository(UserAppConfigs)
      private userAppConfigsRepository: Repository<UserAppConfigs>,
   ) {}
}
