import "carbon-components/scss/globals/scss/styles.scss";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import AppLayout from "../component/app/AppLayout";
import { Content } from "carbon-components-react";
import client from "./api/graphql";
import AppAuthCheck from "../component/app/AppAuthCheck";

// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
    // useEffect(() => {
    //     gapi.auth2
    //         .getAuthInstance()
    //         .signIn()
    //         .then((r) => {
    //             console.log(r);
    //         })
    //         .catch((r) => {
    //             console.log(r);
    //         });
    // });
    return (
        <ApolloProvider client={client}>
            <AppAuthCheck>
                <AppLayout>
                    <Content>
                        <Component {...pageProps} />
                    </Content>
                </AppLayout>
            </AppAuthCheck>
        </ApolloProvider>
    );
}

export default MyApp;
