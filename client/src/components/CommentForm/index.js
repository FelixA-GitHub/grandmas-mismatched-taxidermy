// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_COMMENT } from '../../utils/mutations';
// import { QUERY_ALL_COMMENTS, QUERY_USER } from '../../utils/queries';

// const CommentForm = () => {
//     const [commentText, setText] = useState('');
//     const [characterCount, setCharacterCount] = useState(0);

//     const [addComment, { error }] = useMutation(ADD_COMMENT, {
//         update(cache, { data: { addComment } }) {

//             // could potentially not exist yet, so wrap in a try/catch
//             try {
//                 // update me array's cache
//                 const { user } = cache.readQuery({ query: QUERY_USER });
//                 cache.writeQuery({
//                     query: QUERY_USER,
//                     data: { user: { ...user, comments: [...user.comments, addComment] } },
//                 });
//             } catch (e) {
//                 console.warn("First comment insertion by user!")
//             }

//             // update comment array's cache

//             const { comments } = cache.readQuery({ query: QUERY_ALL_COMMENTS });
//             cache.writeQuery({
//                 query: QUERY_ALL_COMMENTS,
//                 data: { comments: [addComment, ...comments] }
//             });
//         }
//     });

//     const handleChange = (event) => {
//         if (event.target.value.length <= 280) {
//             setText(event.target.value);
//             setCharacterCount(event.target.value.length);
//         }
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             await addComment({
//                 variables: { commentText },
//             });
//             setText('');
//             setCharacterCount(0);
//         }
//         catch (e) {
//             console.error(e);
//         }
//     };

//     return (
//         <div>
//             <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
//                 Character Count: {characterCount}/280
//                 {error && <span className='ml-2'>Something went wrong...</span>}
//             </p>
//             <form className='flex-row justify-center justify-space-between-md align-stretch'
//                 onSubmit={handleFormSubmit}>
//                 <textarea
//                     placeholder='New comment'
//                     value={commentText}
//                     className='form-input col-12 col-md-9'
//                     onChange={handleChange}
//                 ></textarea>
//                 <button className='btn col-12 col-md-3' type='submit'>Submit</button>
//             </form>
//         </div>
//     );
// };

// export default CommentForm;

import React from "react";
// import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_COMMENTS } from '../../utils/queries';
import CommentList from "../CommentList";

const CommentForm = () => {
    

    const { loading, data } = useQuery(QUERY_ALL_COMMENTS);

    const comments = data?.comments || [];
    console.log(comments)

    return (
        <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CommentList comments={comments}/>
      )}
    </div>
  </div>
</main>

    );
};

export default CommentForm;