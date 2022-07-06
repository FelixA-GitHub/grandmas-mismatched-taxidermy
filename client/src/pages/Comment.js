import React from 'react';
import { useParams } from 'react-router-dom';
// import SaleCOMMENT from '../components/SaleCOMMENT';

// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_COMMENTS } from '../utils/queries';
import CommentForm from '../components/CommentForm';


const Comment = (props) => {
  const { id: commentId } = useParams();

  const { loading, data } = useQuery(QUERY_ALL_COMMENTS, {
    variables: { id: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CommentForm commentId={comment._id} />
    </div>
  );
};

export default Comment;
