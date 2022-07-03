import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
  mutation addItem($name: String!, $description: String!, $price: Float!, $image: String!, $created: Date!) {
    addItem(name: $name, description: $description, price: $price, image: $image ) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const ADD_USER = gql`
mutation addUser( $username: String!, $password: String!, $email: String! ) {
    addUser( username: $username, password: $password, email: $email ) {
        token 
        user {
            _id username
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation loginUser( $email: String!, $password: String! ) {
    login( email: $email, password: $password ) {
        token
        user {
            _id
        }
    }
}
`;