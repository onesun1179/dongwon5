import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login($loginInput : LoginInput!) {
        login (loginInput: $loginInput) {
            user {
                name
                auth {
                    id
                    name
                    menus {
                        id
                        name
                        children {
                            id
                            name
                        }
                    }
                }
                userAppConfigs {
                    value
                    appConfig {
                        name
                        validate
                        type
                    }
                }
            }
        }
    }
`
