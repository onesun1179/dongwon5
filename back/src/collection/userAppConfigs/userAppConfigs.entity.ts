import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import {
   Column,
   Entity,
   JoinColumn,
   ManyToOne,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../user/user.entity";
import { AppConfig } from "../appConfig/appConfig.entity";
import { IsEmail } from "class-validator";

@InputType("UserAppConfigsInput", { isAbstract: true })
@ObjectType("UserAppConfigsObject")
@Entity()
export class UserAppConfigs extends PrimaryModel {
   // @PrimaryColumn()
   // @IsEmail()
   // email: string;
   //
   // @PrimaryColumn()
   // code: string;

   // @PrimaryGeneratedColumn()
   // @Field(() => Number)
   // id: number;

   @Field(() => AppConfig)
   @ManyToOne(() => AppConfig, (appConfig) => appConfig.userAppConfigs, {
      primary: true,
   })
   @JoinColumn({
      name: "name",
   })
   appConfig: AppConfig;

   @Field(() => User)
   @ManyToOne(() => User, (user) => user.userAppConfigs, {
      primary: true,
   })
   @JoinColumn({
      name: "email",
   })
   user: User;

   @Field(() => String)
   @Column({
      nullable: true,
      comment: "설정 값",
   })
   value: string;
}
