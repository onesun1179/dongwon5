import { Injectable } from "@nestjs/common";
import { BusinessCode } from "./businessCode.entity";
import { CreateBusinessCodeInput, ListBusinessCodeInput } from "./businessCode.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { reduce, set } from "lodash";

@Injectable()
export class BusinessCodeService {
   constructor(
      @InjectRepository(BusinessCode) private businessCodeRepository: Repository<BusinessCode>,
   ) {}
   codeMap: {
      [index: string]: BusinessCode;
   } = {};

   /**
    * businessCode 새로고침
    * @desc 수정 / 삽입 후 필수 실행
    */
   async renew(): Promise<void> {
      this.codeMap = reduce(
         await this.businessCodeRepository.find(),
         (r, o) => set(r, o.code, o.fullName),
         {},
      );
   }

   /**
    * businessCode 생성
    * @param {CreateBusinessCodeInput} payload
    */
   async create(payload: CreateBusinessCodeInput) {
      const r = await this.businessCodeRepository.create(payload);
      await this.renew();
      return r;
   }

   /**
    * businessCode bulk 생성
    * @param {CreateBusinessCodeInput[]} payload
    */
   async createBulk(payload: CreateBusinessCodeInput[]) {
      const r = await this.businessCodeRepository.save(payload);
      await this.renew();
      return r;
   }

   /**
    * businessCode 조회
    * @param {ListBusinessCodeInput} filters
    */
   async find(filters: ListBusinessCodeInput) {
      return await this.businessCodeRepository.find({ ...filters });
   }

   /**
    * businessCode 찾기
    * @param {string} code
    */
   async findOne(code: string) {
      return await this.businessCodeRepository.findOne(code);
   }
}
