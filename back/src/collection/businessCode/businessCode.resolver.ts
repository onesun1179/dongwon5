import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BusinessCodeService } from "./businessCode.service";
import { BusinessCode } from "./businessCode.entity";
import { CreateBusinessCodeInput, ListBusinessCodeInput } from "./businessCode.input";
import { OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Resolver(() => BusinessCode)
export class BusinessCodeResolver implements OnModuleInit {
   constructor(
      private businessCodeService: BusinessCodeService,
      @InjectRepository(BusinessCode) private businessCodeRepository: Repository<BusinessCode>,
   ) {}

   async onModuleInit(): Promise<void> {
      const a = await this.businessCodeRepository.save({
         code: "E",
         fullName: "Error",
      });
      await this.businessCodeRepository.save([
         {
            code: "BE",
            fullName: "Business Error",
            parentCode: a,
         },
         {
            code: "DE",
            fullName: "Database Error",
            parentCode: a,
         },
      ]);

      await this.businessCodeService.renew();
   }

   @Query(() => BusinessCode, {
      nullable: true,
   })
   async businessCode(@Args("code") code: string) {
      return this.businessCodeService.findOne(code);
   }

   @Query(() => [BusinessCode], {
      nullable: true,
   })
   async businessCodeList(
      @Args("filters") filters: ListBusinessCodeInput,
   ): Promise<BusinessCode[]> {
      return this.businessCodeService.find(filters);
   }

   @Mutation(() => BusinessCode)
   async createBusinessCode(@Args("payload") payload: CreateBusinessCodeInput) {
      return await this.businessCodeService.create(payload);
   }
}
