const dotenv = require("dotenv");
dotenv.config();

import express from "express";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import schema from "./graphql/schema";
import { MongoHelper } from "./helpers/mognoHelpers";

const app = express();
const mHepler = new MongoHelper();
mHepler.initiateMongoConnection();

// const server = new ApolloServer({
//   schema,
//   validationRules: [depthLimit(7)],
//   introspection: true,
// });
let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    introspection: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  apolloServer.applyMiddleware({ app, path: "/graphql" });
}
startServer();
app.use("*", cors());
app.use(compression());

const httpServer = createServer(app);

httpServer.listen({ port: process.env.PORT }, (): void =>
  console.log(
    `\n🚀 GraphQL is now running on http://localhost:${process.env.PORT}/graphql`
  )
);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(process.env.PORT, () => {
//   return console.log(
//     `Express is listening at http://localhost:${process.env.PORT}`
//   );
// });
