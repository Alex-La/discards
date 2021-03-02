const express = require("express");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const config = require("config");
const jwt = require("jsonwebtoken");

const typeDefs = require("./server/schema");
const resolvers = require("./server/resolvers");
const User = require("./models/User");
const { mongoConnect } = require("./server/utils");
mongoConnect();

const UserAPI = require("./server/datasources/user");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI(),
  }),
  context: async ({ req, res }) => {
    const auth = (req.headers && req.headers.authorization) || "";
    if (auth.length === 0) return { user: null };
    try {
      const { userId } = jwt.verify(auth, config.get("jwtSecret"));
      const user = await User.findOne({ _id: userId });
      return { user };
    } catch (e) {
      res.set("auth", "jwt expired");
    }
  },
});

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(
    "/",
    expressStaticGzip(path.join(__dirname, "build"), {
      enableBrotli: true,
      orderPreference: ["br", "gz"],
    })
  );
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.applyMiddleware({ app });

const PORT = config.get("port");
app.listen({ port: PORT }, () => {
  console.log(
    "🚀 Server ready at",
    `https://localhost:${PORT}${server.graphqlPath}`
  );
});
