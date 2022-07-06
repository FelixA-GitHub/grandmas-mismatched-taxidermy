import React from 'react';
import { useParams } from 'react-router-dom';
//import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_COMMENTS } from '../utils/queries';
import CommentsForm from '../components/CommentsForm';
import Comment from '../components/Comment';

const Comments = (props) => {
    const { id: commentId } = useParams();
    const { loading, data } = useQuery(QUERY_ALL_COMMENTS, {
        variables: { id: commentId }
    });
    const comment = data?.comment || {};
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='card mb-3'>
                <p className='card-header'>
                    <span style={{ fontWeight: 700 }} className='text-light'>
                        { comment.username }
                    </span>{' '}
                    comment on { comment.createdAt }
                </p>
                <div className='card-body'>
                    <p>{ comment.commentText }</p>
                    {/* <Comment commentId={comment._id} /> */}
                    <CommentsForm />
                </div>
            </div>
        </div>
    ); 
};

export default Comments;