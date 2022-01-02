import { FC } from "react";
import { gql } from "@apollo/client";
// import { useGoogleApi } from "react-gapi";

export interface AuthCheckProps {}

const LOGIN = gql`
    mutation ($payload: LoginInput!) {
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
`;

const AppAuthCheck: FC<AuthCheckProps> = ({ children }) => {
    // const gapi = useGoogleApi({
    //     scopes: ["profile"],
    // });
    // if (!gapi) return null;
    //
    // // const auth = gapi.auth2?.getAuthInstance();
    // // const [login, { data, loading, error }] = useMutation<LoginObj, { payload: LoginInput }>(LOGIN);
    //
    // // if (loading) return "Submitting...";
    // // if (error) return `Submission error! ${error.message}`;
    //
    // gapi.auth2?.getAuthInstance().signIn();

    return children;
};

AppAuthCheck.displayName = "AppAuthCheck";

export default AppAuthCheck;
