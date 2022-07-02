const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    itemName: String
    itemDescription: String
    itemPrice: Float
    image: String
    comments: [Comment]!
    createdAt: Date

  }

  type Comment {
    _id: ID 
    username: String 
    commentText: String
    createdAt: Date

  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Item]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  
  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
   users: [User]
   user(username: String!): User
   items: [Item]!
   item(_id: ID!): Item
   comments: [Comment]!
   item(comment: ID!): [Comment]
   order(_id: ID!): Order
   checkout(products: [ID]!): Checkout

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;