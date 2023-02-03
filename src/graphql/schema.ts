// import "graphql-import-node";
// import * as rootDefs from "./schemas/schema.graphql";
import { join } from "path";
// import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers/resolvers";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";

const schema = loadSchemaSync(join(__dirname, "schemas/schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

// const schema = makeExecutableSchema({
//   typeDefs: [rootDefs],
//   resolvers,
// });
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

export default schemaWithResolvers;
