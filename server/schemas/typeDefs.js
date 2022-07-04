const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    price: Float
    image: String
     

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
    addItem(name: String, description: String, price: Float, image: String): Item
    addComment(commentText: String!, username: String!): Comment
    removeComment(commentId: ID!): Comment
    removeItem(itemId: ID!): Item
    removeUser(userId: ID!): User
    # edit item
    # delete comment
  }
`;

module.exports = typeDefs;