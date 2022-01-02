"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const menu_module_1 = require("../collection/menu/menu.module");
const app_resolver_1 = require("./app.resolver");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const Path = require("path");
const user_module_1 = require("../collection/user/user.module");
const appConfig_module_1 = require("../collection/appConfig/appConfig.module");
const graphql_scalars_1 = require("graphql-scalars");
const graphql_tools_1 = require("graphql-tools");
const config_1 = require("@nestjs/config");
const businessCode_module_1 = require("../collection/businessCode/businessCode.module");
const msgCode_module_1 = require("../collection/msgCode/msgCode.module");
const userAppConfigs_module_1 = require("../collection/userAppConfigs/userAppConfigs.module");
const stringUnionTypes_1 = require("../common/scalar/stringUnionTypes");
const auth_module_1 = require("../collection/auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [app_resolver_1.AppResolver, app_service_1.AppService, stringUnionTypes_1.ValidatorScalar, stringUnionTypes_1.AppConfigTypeScalar],
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                retryAttempts: 1,
                username: "root",
                password: "1234",
                database: "dongwon",
                entities: ["../../dist/**/*.entity{.ts,.js}"],
                logging: true,
                autoLoadEntities: true,
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot({
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
                        AppConfigTypeScalar: (0, stringUnionTypes_1.makeGroupParseUnionType)(stringUnionTypes_1.ValidatorGroup),
                        ValidatorScalar: (0, stringUnionTypes_1.makeGroupParseUnionType)(stringUnionTypes_1.AppConfigTypeGroup, true),
                        EmailAddress: "string",
                    },
                    additionalHeader: `/* back project graphql types */`,
                },
                schema: (0, graphql_tools_1.makeExecutableSchema)({
                    typeDefs: graphql_scalars_1.typeDefs,
                    resolvers: graphql_scalars_1.resolvers,
                }),
            }),
            menu_module_1.MenuModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            businessCode_module_1.BusinessCodeModule,
            appConfig_module_1.AppConfigModule,
            msgCode_module_1.MsgCodeModule,
            userAppConfigs_module_1.UserAppConfigsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map