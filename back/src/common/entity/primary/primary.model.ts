import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity } from "typeorm";

@InputType({ isAbstract: true })
@ObjectType({})
@Entity()
export abstract class PrimaryModel {
   @Field(() => String, {
      nullable: true,
   })
   @Column({
      nullable: true,
      comment: "비고",
   })
   desc?: string;

   @Field()
   @CreateDateColumn({ type: "timestamp", insert: false, update: false, comment: "생성시간" })
   createdAt: Date;

   @Field()
   @CreateDateColumn({ type: "timestamp", insert: false, update: false, comment: "수정시간" })
   updatedAt: Date;
}
