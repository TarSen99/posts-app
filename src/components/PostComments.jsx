import React from 'react';

const PostComments = ({ comments = [] }) => {
  return (
    <div>
      <h3>Comments: </h3>

      <ul className="comments-container">
        {
          comments.map(comment => {
            return (
              <li key={`${comment.id}${comment.name}`}>
                <div className="comment-header">
                  <h5 className="comment-title">{ comment.name }</h5>
                  <span className="email">{ comment.email }</span>
                </div>

               <p>{ comment.body }</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default PostComments;