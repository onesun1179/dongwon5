import { Field } from "@nestjs/graphql";
import { DateTimeResolver } from "graphql-scalars";

export class CreatePrimaryInput {
   @Field(() => String, {
      nullable: true,
   })
   desc?: string;
}

export class ListPrimaryInput {
   @Field(() => String, {
      nullable: true,
   })
   desc?: string;

   @Field(() => DateTimeResolver)
   createdAt: Date;

   @Field(() => DateTimeResolver)
   updatedAt: Date;
}

export class UpdatePrimaryInput {
   @Field(() => String, {
      nullable: true,
   })
   desc?: string;
}
