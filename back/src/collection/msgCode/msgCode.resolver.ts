import { Args, Query, Resolver } from "@nestjs/graphql";
import { MsgCodeService } from "./msgCode.service";
import { MsgCode } from "./msgCode.entity";
import { ListMsgCodeInput } from "./msgCode.input";
import { OnModuleInit } from "@nestjs/common";

import { _errorMsgInitialValue } from "./msgCode.initialValue";

@Resolver(() => MsgCode)
export class MsgCodeResolver implements OnModuleInit {
   constructor(private errorMsgService: MsgCodeService) {}

   async onModuleInit(): Promise<void> {
      await this.errorMsgService.createBulk(_errorMsgInitialValue);
      await this.errorMsgService.renew();
   }

   @Query(() => MsgCode, {
      nullable: true,
   })
   async msgCode(@Args("code") code: string) {
      return this.errorMsgService.findOne(code);
   }

   @Query(() => [MsgCode])
   async msgCodeList(@Args("filters") filters: ListMsgCodeInput) {
      return this.errorMsgService.find(filters);
   }
}
