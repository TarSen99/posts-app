import React from 'react'
import {Link} from "react-router-dom";

const ListItem = ({post, image}) => {
  return (
    <div className="post-list__item">
      <Link to={`posts/${post.id}`}>
        <div className="post-list-item__img-container">
          <span className="hover-button">More</span>
          <img
            src={image.download_url}
            alt={post.title}
            className="post-list-item__img"
          />
        </div>
      </Link>

      <h4>
        <Link to={`posts/${post.id}`}>
          {post.title}
        </Link>
      </h4>
    </div>
  )
};

export default ListItem