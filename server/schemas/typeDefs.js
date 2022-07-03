const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    itemName: String
    itemDescription: String
    itemPrice: Float
    image: String
    comments: [Comment]!
    createdAt: String

  }

  type Comment {
    _id: ID 
    username: String 
    commentText: String
    createdAt: String

  }

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
   users: [User]
   user(username: String!): User
   items: [Item]!
   comments: [Comment]!
   item(comment: ID!): [Comment]

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    # addOrder(items: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    # add items
    # delete item
    # edit item
    # add comment
    # delete comment
  }
`;

module.exports = typeDefs;