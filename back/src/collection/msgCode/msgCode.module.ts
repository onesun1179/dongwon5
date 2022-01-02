import { Global, Module } from "@nestjs/common";
import { MsgCodeService } from "./msgCode.service";
import { MsgCode } from "./msgCode.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MsgCodeResolver } from "./msgCode.resolver";

@Global()
@Module({
   imports: [TypeOrmModule.forFeature([MsgCode])],
   controllers: [],
   providers: [MsgCodeResolver, MsgCodeService],
   exports: [MsgCodeService],
})
export class MsgCodeModule {}
