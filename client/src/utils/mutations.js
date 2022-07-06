import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
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
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_ITEM = gql`
 mutation addItem($name: String, $description: String, $price: Float, $image: String, $create: String) {
  addItem(name: $name, description: $description, price: $price, image: $image, create: $create) {
    _id
    name
    description
    price
    image
    created
  }
}
`;

export const ADD_COMMENT = gql`
mutation addComment($commentText: String!, $username: String!, $create: String) {
  addComment(commentText: $commentText, username: $username, create: $create) {
    _id
    username
    commentText
    created
  }
}
`;

export const REMOVE_ITEM = gql `
mutation removeItem($itemId: ID!) {
  removeItem(itemId: $itemId) {
    _id
    name
    description
    price
    image
    created
  }
}
`;
 
export const REMOVE_COMMENT = gql `
mutation removeComment($commentId: ID!) {
  removeComment(commentId: $commentId) {
    _id
    username
    commentText
    created
  }
}
`;

export const REMOVE_USER = gql `
mutation Mutation($userId: ID!) {
  removeUser(userId: $userId) {
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

export const ADD_ORDER = gql`
  mutation addOrder($items: [ID]!) {
    addOrder(items: $items) {
      purchaseDate
      items {
        _id
        name
        description
        price
      }
    }
  }
`;