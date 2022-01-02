import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@InputType({ isAbstract: true })
@ObjectType("MsgCodeObject")
@Entity()
export class MsgCode extends PrimaryModel {
   @Field(() => String)
   @PrimaryColumn({
      unique: true,
   })
   code: string;

   @Field(() => String)
   @Column({
      comment: "메시지",
   })
   msg: string;

   @Field(() => String)
   @Column({
      comment: "설명",
   })
   explanation: string;
}
