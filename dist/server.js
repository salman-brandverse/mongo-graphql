"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const http_1 = require("http");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const schema_1 = __importDefault(require("./graphql/schema"));
const mognoHelpers_1 = require("./helpers/mognoHelpers");
const app = (0, express_1.default)();
const mHepler = new mognoHelpers_1.MongoHelper();
mHepler.initiateMongoConnection();
// const server = new ApolloServer({
//   schema,
//   validationRules: [depthLimit(7)],
//   introspection: true,
// });
let apolloServer = null;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        apolloServer = new apollo_server_express_1.ApolloServer({
            schema: schema_1.default,
            validationRules: [(0, graphql_depth_limit_1.default)(7)],
            introspection: true,
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app });
        apolloServer.applyMiddleware({ app, path: "/graphql" });
    });
}
startServer();
app.use("*", (0, cors_1.default)());
app.use((0, compression_1.default)());
const httpServer = (0, http_1.createServer)(app);
httpServer.listen({ port: process.env.PORT }, () => console.log(`\n🚀 GraphQL is now running on http://localhost:${process.env.PORT}/graphql`));
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(process.env.PORT, () => {
//   return console.log(
//     `Express is listening at http://localhost:${process.env.PORT}`
//   );
// });
//# sourceMappingURL=server.js.map