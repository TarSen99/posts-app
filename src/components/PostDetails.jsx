import React from 'react'
import _get from 'lodash/get'

import PageHeader from './additional_components/PageHeader'
import PostComments from './PostComments'
import './../style/post.scss'

const DEFAULT_AUTHOR_NAME = 'Incognito';
const DEFAULT_TITLE_VALUE = 'Article';
const DEFAULT_CONTENT_VALUE = 'No content';

const PostDetails = (props) => {
  const { postDetails, authorDetails, comments } = props.details;

  const author = _get(authorDetails, 'name', DEFAULT_AUTHOR_NAME)
  const content = _get(postDetails, 'body', DEFAULT_CONTENT_VALUE)
  const title = _get(postDetails, 'title', DEFAULT_TITLE_VALUE)

  return (
    <div className="post-details">
      <PageHeader title={title}/>

      <div className="container">
        <div className="post-description">
          <h4>Author: {author}</h4>
            <p>
              {
                content
              }
            </p>

          <PostComments comments={comments}/>
        </div>
      </div>
    </div>
  )
};

export default PostDetails;