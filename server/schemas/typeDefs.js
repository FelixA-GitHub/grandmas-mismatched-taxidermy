const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    price: Float
    image: String
    created: String
  }

  type Comment {
    _id: ID 
    username: String 
    commentText: String
    created: String

  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    created: String
    comments: [Comment]!
    orders: [Order]
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type Checkout {
    session: ID
  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
   users: [User]!
   user(id: ID!): User
   item(id: ID!): Item
   items:[Item]!
   comments(username: String,): [Comment]
   comment(id: ID!): Comment
   order(_id: ID!): Order
   checkout(products: [ID]!): Checkout

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addItem(name: String, description: String, price: Float, image: String): Item
    addComment(commentText: String!, username: String!): Comment
    removeComment(commentId: ID!): Comment
    removeItem(itemId: ID!): Item
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;