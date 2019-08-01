import React from 'react'

import PageHeader from './additional_components/PageHeader'

const PostDetails = (props) => {
  const { details } = props;

  return (
    <div className="post-details">
      <PageHeader title={details.title}/>

      <div className="container">
        <p>
          {
            details.body
          }
        </p>
      </div>
    </div>
  )
};

export default PostDetails;