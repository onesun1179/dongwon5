import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { PrimaryModel } from "../../common/entity/primary/primary.model";
import { UserAppConfigs } from "../userAppConfigs/userAppConfigs.entity";
import {
   AppConfigTypeGroup,
   AppConfigTypeScalar,
   ValidatorGroup,
   ValidatorScalar,
} from "../../common/scalar/stringUnionTypes";

@InputType("AppConfigInput", { isAbstract: true })
@ObjectType("AppConfigObject")
@Entity()
export class AppConfig extends PrimaryModel {
   @Field(() => String)
   @PrimaryColumn({
      unique: true,
      comment: "설정 명",
   })
   name: string;

   @Field(() => String)
   @Column({
      comment: "설정 초깃값",
   })
   initialValue: string;

   @Field(() => AppConfigTypeScalar)
   @Column({
      type: "enum",
      enum: AppConfigTypeGroup,
      default: "string",
      comment: "설정 값 타입",
   })
   type?: typeof AppConfigTypeGroup[number];

   @Field(() => [ValidatorScalar])
   @Column({
      type: "set",
      enum: ValidatorGroup,
      default: [],
      comment: "설정 유효검사타입 그룹",
   })
   validate?: typeof ValidatorGroup[number][];

   @Field(() => [UserAppConfigs], {
      nullable: true,
   })
   @OneToMany(() => UserAppConfigs, (userAppConfig) => userAppConfig.appConfig)
   userAppConfigs?: UserAppConfigs[];
}
