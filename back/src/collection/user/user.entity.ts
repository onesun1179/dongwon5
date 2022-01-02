import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { EmailAddressResolver } from "graphql-scalars";
import { IsEmail } from "class-validator";
import { UserAppConfigs } from "../userAppConfigs/userAppConfigs.entity";
import { Auth } from "../auth/auth.entity";

@InputType("UserInput", { isAbstract: true })
@ObjectType("UserObject")
@Entity()
export class User extends PrimaryModel {
   @Field(() => EmailAddressResolver)
   @PrimaryColumn({
      unique: true,
      comment: "사용자 이메일",
   })
   @IsEmail()
   email: string;

   @Field(() => String)
   @Column({
      comment: "사용자 명",
   })
   name: string;

   @Field(() => Auth)
   @ManyToOne(() => Auth, (auth) => auth.users)
   auth: Auth;

   @Field(() => [UserAppConfigs], {
      nullable: true,
   })
   @OneToMany(() => UserAppConfigs, (userAppConfig) => userAppConfig.user)
   userAppConfigs?: UserAppConfigs[];
}
