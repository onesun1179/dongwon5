import { gql } from "@apollo/client";

const typeDefs = gql`
    ## type
    type UserStore {
        loginYn: Boolean!
    }
`;

export default typeDefs;
