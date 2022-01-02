import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class AppService implements OnModuleInit {
   constructor() {}

   /**
    * DB 초기화
    */
   async onModuleInit(): Promise<void> {
      console.log(11111111);
   }

   getHello(): string {
      return "Hello World!";
   }
}
