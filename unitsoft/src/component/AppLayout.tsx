import type { FC } from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { AppHeader } from "./AppHeader";
import { ApolloProvider, useMutation } from "@apollo/client";
import client from "../gatsby-plugin-apollo/client";
import { LoginInput, LoginObject } from "../../backend-types";
import { LOGIN } from "../gatsby-plugin-apollo/gql/client/user/user.mutation";

export interface LayoutProps {}

const AppLayout: FC<LayoutProps> = ({ children }) => {
    const [login] = useMutation<{login : LoginObject}, { loginInput: LoginInput }>(LOGIN);
    const [loginYn, setLoginYn] = useState(false);


    useLayoutEffect(() => {
        gapi.auth2
            .getAuthInstance()
            .signIn()
            .then((r) => {
                const profile = r.getBasicProfile();

              login({
                variables: {
                  loginInput: {
                    email: profile.getEmail(),
                  },
                },
              }).then((r) => {
                console.log(r)
                // console.log(r.data?.login.user)
                // console.log(r);
                setLoginYn(true);
              })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
                console.error("login 오류", e);
            });
    }, []);

    return loginYn ? (
        <ApolloProvider client={client}>
            <AppHeader>{children}</AppHeader>
        </ApolloProvider>
    ) : null;
};

export default AppLayout;
