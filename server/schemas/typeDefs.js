const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    price: Float
    image: String
    created: String
     # comments: [Comment]!

  }

  # type Comment {
  #   _id: ID 
  #   username: String 
  #   commentText: String
  #   createdAt: String

  # }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  #  users: [User]
   user(username: String!): User
   item: [Item]!
  #  comments: [Comment]!
  #  item(comment: ID!): [Comment]

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addItem(name: String, description: String, price: Float, image: String, created: String): Item
    # delete item
    # edit item
    # add comment
    # delete comment
  }
`;

module.exports = typeDefs;