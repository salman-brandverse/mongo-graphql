"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "graphql-import-node";
// import * as rootDefs from "./schemas/schema.graphql";
const path_1 = require("path");
// import { makeExecutableSchema } from "graphql-tools";
const resolvers_1 = __importDefault(require("./resolvers/resolvers"));
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const schema_1 = require("@graphql-tools/schema");
const schema = (0, load_1.loadSchemaSync)((0, path_1.join)(__dirname, "schemas/schema.graphql"), {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
const schemaWithResolvers = (0, schema_1.addResolversToSchema)({ schema, resolvers: resolvers_1.default });
exports.default = schemaWithResolvers;
//# sourceMappingURL=schema.js.map