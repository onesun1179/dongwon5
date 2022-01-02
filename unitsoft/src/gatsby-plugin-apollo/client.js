import { ApolloClient, InMemoryCache } from "@apollo/client";
import { userResolvers } from "./gql/client/user/user.type";
import { setContext } from "@apollo/client/link/context";

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache({}),
    resolvers: [userResolvers],
});

console.log(client)

export default client;
