const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: String
  }

  type Mutation {
    registration: String
  }
`;

module.exports = typeDefs;
