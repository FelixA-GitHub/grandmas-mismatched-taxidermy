import { gql } from '@apollo/client';

export const QUERY_ITEM = gql`
  {
    item {
      _id
      name
      description
      price
      image
    }
  }
`;

// export const QUERY_ALL_ITEMS = gql`
//   {
//     items {
//       _id
//       name
//       description
//       price
//       image
//     }
//   }
// `;


export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      comments {
        username
        commentText
        created
      }
    }
  }
`;



