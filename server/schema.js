const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    registration(form: IUser!): String!
    login(form: IUser!): Login!
  }

  input IUser {
    name: String
    email: String!
    password: String!
  }

  type Login {
    token: String!
    user: User!
  }

  type User {
    id: String!
    name: String!
  }
`;

module.exports = typeDefs;
