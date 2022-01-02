"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const promise_1 = require("mysql2/promise");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const connection = await (0, promise_1.createConnection)({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1234",
        database: "dongwon",
    });
    const [r] = await connection.query(`
       SELECT TABLE_NAME
                        FROM INFORMATION_SCHEMA.TABLES
                        WHERE TABLE_SCHEMA = 'dongwon';
      `);
    for (const { TABLE_NAME } of r) {
        await connection.query(`
       DROP TABLE ${TABLE_NAME};
      `);
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: console,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
