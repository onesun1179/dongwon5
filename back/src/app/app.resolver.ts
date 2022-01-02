import { Args, Field, ObjectType, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@ObjectType()
class Result {
   @Field(() => Boolean)
   result: boolean;
}

@Resolver()
export class AppResolver {
   @Query(() => String)
   sayHello(): string {
      return "Hello World!";
   }

   @UseGuards(AuthGuard("local"))
   @Query(() => Result)
   async login(@Args("email") email: string, @Args("password") password: string) {
      console.log(email, password);
      return {
         result: true,
      };
   }
}
