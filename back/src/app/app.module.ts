import { Module } from "@nestjs/common";
import { MenuModule } from "../collection/menu/menu.module";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import * as Path from "path";
import { UserModule } from "../collection/user/user.module";
import { AppConfigModule } from "../collection/appConfig/appConfig.module";
import { resolvers, typeDefs } from "graphql-scalars";
import { makeExecutableSchema } from "graphql-tools";
import { ConfigModule } from "@nestjs/config";
import { BusinessCodeModule } from "../collection/businessCode/businessCode.module";
import { MsgCodeModule } from "../collection/msgCode/msgCode.module";
import { UserAppConfigsModule } from "../collection/userAppConfigs/userAppConfigs.module";
import {
   AppConfigTypeGroup,
   AppConfigTypeScalar,
   makeGroupParseUnionType,
   ValidatorGroup,
   ValidatorScalar,
} from "../common/scalar/stringUnionTypes";
import { AuthModule } from "../collection/auth/auth.module";

@Module({
   controllers: [],
   providers: [AppResolver, AppService, ValidatorScalar, AppConfigTypeScalar],
   imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
         type: "mysql",
         host: "localhost",
         port: 3306,
         retryAttempts: 1,
         username: "root",
         password: "1234",
         database: "dongwon",
         entities: ["../../dist/**/*.entity{.ts,.js}"],
         // dropSchema: process.env.NODE_ENV === "development",
         logging: true,
         autoLoadEntities: true,
         synchronize: true,
      }),
      /*****************************************************
       *                      front로 제공되는 types - Start
       *****************************************************/
      GraphQLModule.forRoot({
         autoSchemaFile: Path.join(process.cwd(), "src/schema.gql"),
         sortSchema: true,
         playground: true,
         debug: true,
         definitions: {
            path: Path.join(process.cwd(), "../unitsoft/backend-types.ts"),
            outputAs: "interface",
            defaultScalarType: "unknown",
            customScalarTypeMapping: {
               DateTime: "Date",
               AppConfigTypeScalar: makeGroupParseUnionType(ValidatorGroup),
               ValidatorScalar: makeGroupParseUnionType(AppConfigTypeGroup, true),
               EmailAddress: "string",
            },
            additionalHeader: `/* back project graphql types */`,
         },
         schema: makeExecutableSchema({
            typeDefs,
            resolvers,
         }),
      }),
      /*****************************************************
       *                      front로 제공되는 types - End
       *****************************************************/
      MenuModule,
      AuthModule,
      UserModule,
      BusinessCodeModule,
      AppConfigModule,

      MsgCodeModule,
      UserAppConfigsModule,
   ],
})
export class AppModule {}
