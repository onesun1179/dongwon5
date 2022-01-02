import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";

@InputType({ isAbstract: true })
@ObjectType()
export class LoginObject {
   @Field(() => User)
   user: User;
}
