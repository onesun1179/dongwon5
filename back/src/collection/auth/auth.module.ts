import { Module } from "@nestjs/common";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { Auth } from "./auth.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuModule } from "../menu/menu.module";

@Module({
   imports: [TypeOrmModule.forFeature([Auth]), MenuModule],
   controllers: [],
   providers: [AuthResolver, AuthService],
   exports: [AuthService],
})
export class AuthModule {}
