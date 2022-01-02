import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { createConnection } from "mysql2/promise";
import { ValidationPipe } from "@nestjs/common";
import "reflect-metadata";

async function bootstrap() {
   const connection = await createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "1234",
      database: "dongwon",
   });
   const [r] = await connection.query(
      `
       SELECT TABLE_NAME
                        FROM INFORMATION_SCHEMA.TABLES
                        WHERE TABLE_SCHEMA = 'dongwon';
                        
      `,
   );
   await connection.query(
      `
       SET foreign_key_checks = 0
      `,
   );
   for (const { TABLE_NAME } of r as { TABLE_NAME: string }[]) {
      await connection.query(
         `
       DROP TABLE ${TABLE_NAME};
      `,
      );
   }
   await connection.query(
      `
       SET foreign_key_checks = 1
      `,
   );
   const app = await NestFactory.create(AppModule, {
      logger: console,
   });
   app.useGlobalPipes(new ValidationPipe());
   await app.listen(3000);
}

bootstrap();
