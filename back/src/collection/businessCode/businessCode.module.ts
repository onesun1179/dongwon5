import { Global, Module } from "@nestjs/common";
import { BusinessCodeService } from "./businessCode.service";
import { BusinessCode } from "./businessCode.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BusinessCodeResolver } from "./businessCode.resolver";

@Global()
@Module({
   imports: [TypeOrmModule.forFeature([BusinessCode])],
   controllers: [],
   providers: [BusinessCodeResolver, BusinessCodeService],
   exports: [BusinessCodeService],
})
export class BusinessCodeModule {}
