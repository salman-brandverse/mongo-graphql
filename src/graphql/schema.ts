import { join } from "path"
import resolvers from "./resolvers/resolvers"
import { loadSchemaSync } from "@graphql-tools/load"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { addResolversToSchema } from "@graphql-tools/schema"

const schema = loadSchemaSync(join(__dirname, "schemas/schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
})

const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

export default schemaWithResolvers
