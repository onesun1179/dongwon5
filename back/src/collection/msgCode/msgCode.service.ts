import { Injectable } from "@nestjs/common";
import { MsgCode } from "./msgCode.entity";
import { CreateMsgCodeInput, ListMsgCodeInput } from "./msgCode.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { reduce, set } from "lodash";

@Injectable()
export class MsgCodeService {
   errorMsgMap: {
      [index: string]: string;
   } = {};

   constructor(
      @InjectRepository(MsgCode)
      private msgCodeRepository: Repository<MsgCode>,
   ) {}

   getMsg(errorCode: string, ...arg: any[]): string {
      const msg = this.errorMsgMap[errorCode];
      if (msg) {
         return msg.replace(/\{([0-9]+)\}/g, (a, b) => arg[b]);
      } else {
         return this.getMsg("E0000", errorCode);
      }
   }

   /**
    * 메뉴 생성
    * @param payload
    */
   async create(payload: CreateMsgCodeInput) {
      return await this.msgCodeRepository.save(payload);
   }

   /**
    * 메뉴 bulk 생성
    * @param payload
    */
   async createBulk(payload: CreateMsgCodeInput[]) {
      return await this.msgCodeRepository.save(payload);
   }

   async findOne(code: string) {
      return await this.msgCodeRepository.findOne(code);
   }

   async find(filters: ListMsgCodeInput) {
      return await this.msgCodeRepository.find({ ...filters });
   }

   async renew(): Promise<void> {
      this.errorMsgMap = reduce(
         await this.msgCodeRepository.find(),
         (r, o) => set(r, `${o.code}`, o.msg),
         {},
      );
   }
}
