import { gql, Resolvers } from "@apollo/client";
import client from "../graphql";
import { LoginObj } from "../../../../backend-types";

export const userResolvers: Resolvers = {
    Mutation: {
        async login(rootValue, { profileObj, tokenObj }, context, { cache }) {
            const _tokenObj = {
                access_token: tokenObj.access_token,
                id_token: tokenObj.id_token,
                expires_in: tokenObj.expires_in,
                first_issued_at: tokenObj.first_issued_at,
                expires_at: tokenObj.expires_at,
            };

            const { data } = await client.mutate<{ login: LoginObj }>({
                mutation: gql`
                    mutation ($payload: LoginInput) {
                        login(loginInput: $payload) {
                            user {
                                userAppConfigs {
                                    appConfig {
                                        name
                                    }
                                    value
                                }
                                menus {
                                    id
                                    title
                                    children {
                                        id
                                        title
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    payload: {
                        profileObj,
                        tokenObj: _tokenObj,
                    },
                },
            });

            if (data) {
                return {
                    menus: data.login.user.menus,
                    appConfig: data.login.user.userAppConfigs,
                    profileObj,
                    tokenObj,
                };
            }
        },
    },
};
