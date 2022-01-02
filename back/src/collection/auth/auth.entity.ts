import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import {
   Column,
   Entity,
   ManyToMany,
   OneToMany,
   PrimaryGeneratedColumn,
   Tree,
   TreeChildren,
   TreeParent,
   JoinTable,
} from "typeorm";
import { User } from "../user/user.entity";
import { Menu } from "../menu/menu.entity";

@InputType("AuthInput", { isAbstract: true })
@ObjectType("AuthObject")
@Entity()
@Tree("closure-table")
export class Auth extends PrimaryModel {
   @Field(() => Number)
   @PrimaryGeneratedColumn({
      comment: "권한 아이디",
   })
   id: number;

   @Field(() => String)
   @Column({
      comment: "권한 명",
   })
   name: string;

   @Field(() => [Auth], {
      nullable: true,
   })
   @TreeChildren()
   children?: Auth[];

   @Field(() => Auth, {
      nullable: true,
   })
   @TreeParent()
   parentAuth?: Auth;

   @Field(() => [User], {
      nullable: true,
   })
   @OneToMany(() => User, (user) => user.auth)
   users?: User[];

   @Field(() => [Menu])
   @ManyToMany(() => Menu)
   @JoinTable()
   menus: Menu[];
}
