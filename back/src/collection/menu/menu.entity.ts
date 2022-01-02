import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";
import { PrimaryModel } from "../../common/entity/primary/primary.model";

@InputType("MenuInput", { isAbstract: true })
@ObjectType("MenuObject")
@Entity()
@Tree("closure-table")
export class Menu extends PrimaryModel {
   @Field(() => Number)
   @PrimaryGeneratedColumn({
      comment: "메뉴 아이디",
   })
   id: number;

   @Field(() => String)
   @Column({
      comment: "메뉴 명",
   })
   name: string;

   @Field(() => [Menu], {
      nullable: true,
   })
   @TreeChildren()
   children?: Menu[];

   @Field(() => Menu, {
      nullable: true,
   })
   @TreeParent()
   parentMenu?: Menu;
}
