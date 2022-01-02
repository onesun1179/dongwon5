declare module "*.gql" {
    import { DocumentNode } from "graphql";
    const Schema: DocumentNode;

    export = Schema;
}

declare module NodeJS {
    interface Global {
        gapi: gapi;
    }
}
