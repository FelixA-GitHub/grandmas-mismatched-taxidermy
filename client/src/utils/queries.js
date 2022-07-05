
import { gql } from '@apollo/client';

export const QUERY_USER = gql `
query user($userId: ID!) {
  user(id: $userId) {
    _id
    username
    email
    password
    created
    comments {
      _id
      username
      commentText
      created
    }
  }
}
`;

export const QUERY_ALL_USERS = gql`
 query users {
  users {
    _id
    username
    email
    password
    created
    comments {
      _id
      username
      commentText
      created
    }
  }
}
`;

export const QUERY_ITEM = gql`
query item ($itemId: ID!) {
  item(itemId: $itemId) {
    _id
    name
    description
    price
    image
    created
  }
}
`;

export const QUERY_ALL_ITEMS = gql`
 query items {
  items {
    _id
    name
    description
    price
    image
    created
  }
}
`;

export const QUERY_COMMENT = gql `
query comment($commentId: ID!) {
  comment(id: $commentId) {
    _id
    username
    commentText
    created
  }
}
`;

export const QUERY_ALL_COMMENTS = gql `
query comments($username: String) {
  comments(username: $username) {
    _id
    username
    commentText
    created
  }
}
`;



