import { userResolvers } from "./resolvers/user.resolvers";
import typeDefs from "./typeDefs";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
    typeDefs,
    resolvers: [userResolvers],
});

export default client;
