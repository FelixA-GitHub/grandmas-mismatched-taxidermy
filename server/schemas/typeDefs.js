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
  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
   users: [User]!
   user(id: ID!): User
   item(id: ID!): Item
   items: [Item]!
   comments(username: String,): [Comment]
   comment(id: ID!): Comment

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addItem(name: String, description: String, price: Float, image: String, create: String): Item
    addComment(commentText: String!, username: String!, create: String): Comment
    removeComment(commentId: ID!): Comment
    removeItem(itemId: ID!): Item
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;