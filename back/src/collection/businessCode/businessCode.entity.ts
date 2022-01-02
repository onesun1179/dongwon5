import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, PrimaryColumn, Tree, TreeChildren, TreeParent } from "typeorm";
import { PrimaryModel } from "../../common/entity/primary/primary.model";

@InputType("BusinessCodeInput", { isAbstract: true })
@ObjectType("BusinessCodeObject")
@Entity()
@Tree("closure-table")
export class BusinessCode extends PrimaryModel {
   @Field(() => String)
   @PrimaryColumn({
      unique: true,
      comment: "비즈니스 코드 명",
   })
   code: string;

   @Field(() => String)
   @Column({
      comment: "비즈니스 코드 원말",
   })
   fullName: string;

   @Field(() => [BusinessCode], {
      nullable: true,
   })
   @TreeChildren()
   children?: BusinessCode[];

   @Field(() => BusinessCode, {
      nullable: true,
   })
   @TreeParent()
   parentCode?: BusinessCode;
}
