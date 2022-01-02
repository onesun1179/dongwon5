import { ApolloClient, InMemoryCache, makeVar, ReactiveVar, Resolvers } from "@apollo/client";
import { LoginInput, LoginObject } from "../../../../../backend-types";
import { LOGIN } from "../../server/server.mutation";

export interface UserState {
    email?: string;
    name?: string;
    auth?: string;
}

export const userVar: ReactiveVar<UserState> = makeVar<UserState>({});

export const userResolvers: Resolvers = {
    Mutation: {
        login: async (
            _,
            { loginInput }: { loginInput: LoginInput },
            context: {
                cache: InMemoryCache;
                client: ApolloClient<any>;
                clientAwareness: {
                    name: unknown;
                    version: unknown;
                };
            },
            info
        ) => {
            const {data, errors} = await context.client.mutate<LoginObject, { loginInput: LoginInput }>({
                mutation: LOGIN,
                variables: {
                    loginInput
                },
            });
            console.log(data, errors)

            console.log(_, loginInput, context, info);
        },
    },
    Query: {
        user: (rootValue, args, context, info) => {
            console.log(1);
            console.log(rootValue, args, context, info);
            return userVar();
        },
        test: (rootValue, args, context, info) => {
            return "test";
        },
    },
};
