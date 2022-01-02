import { makeVar, ReactiveVar, Resolvers } from "@apollo/client";
import { LoginInput, LoginObject } from "../../../../../backend-types";
import { LOGIN } from "../../server/server.mutation";


export interface UserState {
  email?: string;
  name?: string;
  auth?: string;
}

export const userVar: ReactiveVar<UserState> = makeVar<UserState>({});

export const userResolvers: Resolvers = {
  Mutation : {
    login : ((rootValue,args, context, info) => {
      // const a = context.client.mutate(LOGIN, {
      //   email
      // })
      // console.log(a)
      console.log(rootValue,args, context, info)
    })
  },
  Query: {
    user: (rootValue, args, context, info) => {
      console.log(1);
      console.log(rootValue, args, context, info);
      return userVar();
    },
    test: (rootValue, args, context, info) => {
      return "test";
    }
  }
};

