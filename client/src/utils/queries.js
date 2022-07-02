import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query getItems {
    items {
      _id
      name
      description
      price
      image
    }
  }
`;

export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      name
      description
      price
    }
  }
`;


export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;
