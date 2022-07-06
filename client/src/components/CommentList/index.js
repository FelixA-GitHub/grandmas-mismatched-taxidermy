import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div className=''>
      <h3>{title}</h3>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/comment/${comment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {comment.username}
              </Link>
              comment on {comment.created}
            </p>
            <div className="card-body">
              <Link to={`/comment/${comment._id}`}>
                <p>{comment.commentText}</p>
                {/* <p className="mb-0">
                  Reactions: {comment.reactionCount} || Click to{' '}
                  {comment.reactionCount ? 'see' : 'start'} the discussion!
                </p> */}
              </Link>
            </div>
            <Link className="nav-item nav-link bg-info w-100 draw-border comment-button comment-btn-font" to="/comment/:id">Comment</Link>
          </div>
        ))}
    </div>
  );
};

export default CommentList;